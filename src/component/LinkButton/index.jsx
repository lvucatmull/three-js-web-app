import React from "react";
import styled, { css } from "styled-components";

// background: ${(props) =>
//   props.$clicked ? "#BF4F74" : "hsl(209, 58%, 55%) !important"};
const DefaultButtonStyled = styled.button`
  min-width: 160px;
  height: 40px;
  border-radius: 4px;
  border: none;
  font-weight: 500;
  font-size: 22px;
  line-height: 27px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 4px 0 #fc894d;
  background: ${(props) =>
    props.$clicked
      ? "hsl(104, 58%, 55%) !important"
      : "hsl(209, 58%, 55%) !important"};

  &:active {
    text-color: #0000;
    box-shadow: 1px 1px 0 #fc894d !important;
  }

  ${(props) =>
    props.$primary &&
    css`
      background: hsl(209, 58%, 55%) !important;
      color: white;
      border: none;
      &:focus {
        background: hsl(209, 58%, 55%) !important;
      }
      &:disabled {
        opacity: 0.2;
      }
    `};
`;

const LinkButton = ({ children, clicked, primary, ...props }) => {
  return (
    <DefaultButtonStyled $clicked={clicked} $primary={primary} {...props}>
      {children}
    </DefaultButtonStyled>
  );
};

export default LinkButton;
