import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import * as Styled from "./styles";
import { addTodo, getAllTodos, deleteTodo, markTodoDone } from "./todoSlice";

const Todo = () => {
  const [contentValue, setContentValue] = useState("");
  const allTodos = useAppSelector(getAllTodos);
  const dispatch = useAppDispatch();

  // Event handlers

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: new Date().getTime(),
        isCompleted: false,
        content: contentValue,
      })
    );
    setContentValue("");
  };
  const handleDoneButtonClick = (id: number): void => {
    dispatch(markTodoDone(id));
  };
  const handleDeleteButtonClick = (id: number): void => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Styled.MyStack direction="v">
          <Styled.MyInput
            onChange={(e) => setContentValue(e.target.value)}
            value={contentValue}
          />
          <Styled.DynamicButton variant="success" disabled={!contentValue}>
            Add todo
          </Styled.DynamicButton>
        </Styled.MyStack>
      </form>

      <ul>
        <Styled.MyStack direction="v">
          {allTodos.map((todo) => (
            <Styled.MyStack
              key={todo.id}
              justify="space-between"
              align="center"
            >
              <div>
                <Styled.MyListItem strike={todo.isCompleted ? true : false}>
                  {todo.content}
                </Styled.MyListItem>
              </div>
              <div>
                <Styled.DynamicButton
                  variant="success"
                  onClick={() => handleDoneButtonClick(todo.id)}
                >
                  Mark {todo.isCompleted ? "Undone" : "Done"}
                </Styled.DynamicButton>
                <Styled.DynamicButton
                  onClick={() => handleDeleteButtonClick(todo.id)}
                >
                  X
                </Styled.DynamicButton>
              </div>
            </Styled.MyStack>
          ))}
        </Styled.MyStack>
      </ul>
    </>
  );
};

export default Todo;
