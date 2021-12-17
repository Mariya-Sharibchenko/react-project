import React from 'react';

import styled from 'styled-components';

import { Colors } from 'context';
import bookmarkWhite from 'public/bookmark-icon_white.svg';
import bookmarkColored from 'public/bookmark-icon_colored.svg';

const { mainColor, secondaryColor, mainText } = Colors;

export interface IStyledBookmarkButton {
  isMarked: boolean,
}

export interface IBookmarkButtonProps extends IStyledBookmarkButton{
  onClick?: () => void;

  className?: string
}

const StyledBookmarkButton = styled.button<IStyledBookmarkButton>`
  position: relative;
  margin: 0;
  width: 36px;
  height: 36px;
  border: 0;
  border-radius: 5px;
  background-color: ${mainText};
  cursor: pointer;
  
  &:after {
    position: absolute;
    content: ${({isMarked}) => isMarked ? `url(${bookmarkColored})` : `url(${bookmarkWhite})`};
    top: 0;
    left: 0;
  }
`;

export const BookmarkButton: React.FC<IBookmarkButtonProps> = ({ onClick, isMarked, className }) => {
  return (
    <StyledBookmarkButton
      type="button"
      onClick={onClick}
      isMarked={isMarked}
      className={className}
    />
  )
};



