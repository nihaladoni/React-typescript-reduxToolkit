import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./app/globals";
import { darkTheme, lightTheme } from "./components/Theme";
import { AppWrapper, Position } from "./features/todo/styles";

import Todo from "./features/todo/Todo";

function App() {
    const [isDark, setIsdark] = useState(false);

    // Utility

    const toggleTheme = () => {
        setIsdark((dark) => !dark);
    };

    // SVG icons

    const sun = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-sun"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ff9300"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="4" />
            <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
        </svg>
    );

    const moon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-moon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
        </svg>
    );

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <GlobalStyles />
            <AppWrapper>
                <Position type="absolute" t="3px" r="3px">
                    <button onClick={toggleTheme}>{isDark ? sun : moon}</button>
                </Position>
                <h1>Todo</h1>
                <Todo />
            </AppWrapper>
        </ThemeProvider>
    );
}

export default App;
