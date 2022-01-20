import styled, { css } from "styled-components";
import { colors, devices } from "../../components/Theme";

export const MyInput = styled.input`
  padding: 8px 10px;
  font-size: 1.3rem;
  margin-bottom: 10px;
`;
export const AppWrapper = styled.main`
  min-width: 90vw;
  position: relative;

  @media (min-width: ${devices.laptop}) {
    min-width: 50vw;
  }
  @media (min-width: ${devices.tablet}) {
    min-width: 50vw;
  }
`;

interface PositionProps {
  type: "absolute" | "relative" | "static";
  t?: string;
  b?: string;
  l?: string;
  r?: string;
}

export const Position = styled.div<PositionProps>`
  position: ${(props) => props.type};
  top: ${(props) => props.t};
  bottom: ${(props) => props.b};
  left: ${(props) => props.l};
  right: ${(props) => props.r};
`;

interface ListText {
  strike?: boolean;
}

export const MyListItem = styled.li<ListText>`
  color: ${(props) => props.theme.text};
  font-weight: bold;
  font-size: 1.2rem;
  ${(props) =>
    props.strike &&
    css`
      text-decoration: line-through;
    `}
`;

//   Buttons

interface ButtonProps {
  variant?: string;
}

export const SimpleButton = styled.button`
  padding: 8px 9px;
  color: white;
  &:hover {
    color: yellow;
    cursor: pointer;
  }

  &:active {
    box-shadow: 0 1px;
    transform: translateY(1px);
  }
  @media (min-width: ${devices.mobile}) {
    align-self: flex-start;
  }
`;
export const DynamicButton = styled(SimpleButton)<ButtonProps>`
  background-color: ${(props) =>
    props.variant === "success" ? colors.success : "red"};
`;

//  Utilities

type alignType = "flex-start" | "center" | "flex-end";
interface StackProps {
  direction?: "v" | "h";
  align?: alignType;
  justify?: alignType | "space-between" | "space-evenly" | "space-around";
}

export const MyStack = styled.div<StackProps>`
  display: flex;
  flex-direction: ${(props) => (props.direction === "v" ? "column" : "row")};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
`;
