import React from 'react';

import styled from 'styled-components';

import { DeleteButtonText, Colors, WindowSize, Media } from 'context';
import iconClose from 'public/icon-close.svg';
import { useWindowSize } from 'utils/getWindowSize';

const { mainColor } = Colors;
const { laptop } = WindowSize;

export interface IDeleteButtonProps {
  onClick: () => void,
}

const StyledDeleteButton = styled.button`
  cursor: pointer;
  height: 25px;
  padding-right: 25px;
  font-size: 14px;
  border: none;
  background-color: transparent;
  text-align: left;
  position: relative;
  
  ${Media.laptop} {
    width: 96px;
  }
  
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
  const windowSize = useWindowSize();

  return (
    <StyledDeleteButton onClick={onClick}>
      {windowSize && windowSize.width > laptop && DeleteButtonText}
    </StyledDeleteButton>
  );
};
