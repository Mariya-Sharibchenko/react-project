import React from 'react';

import styled from 'styled-components';

import { DeleteButtonText, Colors } from 'context';
import iconClose from 'public/icon-close.svg';

const { mainColor } = Colors;

export interface IDeleteButtonProps {
  onClick: () => void,
}

const StyledDeleteButton = styled.button`
  cursor: pointer;
  min-width: 96px;
  min-height: 25px;
  padding-right: 25px;
  font-size: 14px;
  border: none;
  background-color: transparent;
  text-align: left;
  position: relative;
  
  &:after {
    position: absolute;
    content: url(${iconClose});
    top: 0;
    right: 0;
    width: 24px;
    height: 24px;
    background-color: transparent;
    border-radius: 5px;
  }

  &:hover {
    &:after {
      background-color: ${mainColor};
    }
  }
`;

export const DeleteButton: React.FC<IDeleteButtonProps> = ({onClick}) => {
  return (
    <StyledDeleteButton onClick={onClick}>
      {DeleteButtonText}
    </StyledDeleteButton>
  )
};
