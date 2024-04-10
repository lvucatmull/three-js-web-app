import React from "react";
import styled from "styled-components";

const LNBStyled = styled.div`
  display: block;
  border-right: 1px solid black;
  width: 10%;
  height: 85vh;
  flex-direction: column;
  background-color: #4ba5ca;
  cursor: default;

  & p {
    text-align: center;
  }

  & ul {
    list-style-type: none;
  }
  & ul li {
    display: inline-block;
    margin-left: 10px;
  }
  & ul li a {
    text-decoration: none;
  }
`;

const LNB = ({ children, ...props }) => {
  return <LNBStyled {...props}>{children}</LNBStyled>;
};

export default LNB;
