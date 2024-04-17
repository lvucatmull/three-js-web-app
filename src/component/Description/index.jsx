import React from 'react';
import styled, { css } from 'styled-components';

// ${'' /* left: ${props => props.originX ?? '10px'}; */}
// {'' /* top: ${props => props.originY ?? '10px'}; */}
const DescriptionStyled = styled.div`
  display: block;
  position: absolute;
  left: ${props => props.originX};
  top: ${props => props.originY};
  text-align: center;
  z-index: 100;
`;

const Description = ({ children, originX, originY, ...props }) => {
  console.log('[Description] originX : ', originX);
  console.log('[Description] originY : ', originY);
  return (
    <DescriptionStyled $originX={originX} $originY={originY} {...props}>
      {children}
    </DescriptionStyled>
  );
};

export default Description;
