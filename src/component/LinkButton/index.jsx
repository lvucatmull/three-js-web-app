import React from "react";
import styled, { css } from "styled-components";

// background: ${(props) =>
//   props.$clicked ? "#BF4F74" : "hsl(209, 58%, 55%) !important"};
const DefaultButtonStyled = styled.button`
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;

  &:active {
    text-color: #ff0000;
  }
`;

const LinkButton = ({ children, clicked, primary, ...props }) => {
  return (
    <DefaultButtonStyled $clicked={clicked} $primary={primary} {...props}>
      {children}
    </DefaultButtonStyled>
  );
};

export default LinkButton;
