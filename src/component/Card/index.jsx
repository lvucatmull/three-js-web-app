import React from 'react';

const CardStyled = styled.div`
    border: 1px;
    border-radius: 1rem;
    box-shadow: 10px 5px 5px black;
`;

const Card = ({ children, ...props }) => {
    return (
      <CardStyled {...props}>
        {children}
      </CardStyled>
    );
  };
  
  export default Card;