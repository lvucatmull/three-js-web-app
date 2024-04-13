import React from "react";
import styled, { css } from "styled-components";

const LinkButtonStyled = styled.button`
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

  &:active {
    text-color: #0000;
    box-shadow: 1px 1px 0 #fc894d !important;
  }
`;

const LinkButton = ({ children, clicked, primary, ...props }) => {
  return (
    <LinkButtonStyled $clicked={clicked} $primary={primary} {...props}>
      {children}
    </LinkButtonStyled>
  );
};

export default LinkButton;
