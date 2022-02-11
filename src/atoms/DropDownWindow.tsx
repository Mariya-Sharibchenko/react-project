import React from 'react';

import styled from 'styled-components';

import { Colors } from 'context';

const { secondaryColor, borderColor } = Colors;

interface IDropDownWindowProps {
  className?: string
}

const StyledDropDownWindow = styled.div`
  width: fit-content;
  height: fit-content;
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

export const DropDownWindow: React.FC<IDropDownWindowProps> = ({ children, className}) => {
  return (
    <StyledDropDownWindow className={className}>
      { children }
      <Triangle />
    </StyledDropDownWindow>
  );
};



