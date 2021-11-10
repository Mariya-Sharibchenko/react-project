import React from 'react';

import styled from 'styled-components';

import { Colors } from 'context';

const { secondaryColor, borderColor } = Colors;

const StyledDropDownWindow = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 31px 24px;
  border: 1px solid ${borderColor};
  border-radius: 1px;
  background-color: ${secondaryColor};
  cursor: pointer;
  position: relative;
  font-size: 14px;
`;

const Triangle = styled.div`
  position: absolute;
  height: 6px;
  width: 6px;
  top: -3px;
  right: 19px;
  background-color: inherit;
  border: inherit;
  border-radius: 0 0 0 1px;
  clip-path: polygon(0% 100%, 100% 100%, 0% 0%);
  transform: rotate(135deg);
`;

export const DropDownWindow: React.FC = ({ children}) => {
  return (
    <StyledDropDownWindow>
      { children }
      <Triangle/>
    </StyledDropDownWindow>
  )
};



