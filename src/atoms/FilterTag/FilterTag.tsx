import React from 'react';

import styled from 'styled-components';

import { Colors } from 'context';
import iconClose from 'public/icon-close-for-tag.svg';

const { mainColor } = Colors;

export interface IFilterTagProps {
  text: string,
  onClick: (tagName: string) => void,
}

const StyledFilterTag = styled.button`
  cursor: pointer;
  padding: 6px 36px 6px 15px;
  background-color: ${mainColor};
  position: relative;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  
  &:after {
    position: absolute;
    content: url(${iconClose});
    width: 24px;
    height: 24px;
    top: 2px;
    right: 6px;
  }
`;

export const FilterTag: React.FC<IFilterTagProps> = ({ onClick, text }) => {
  const onTagClick = () => onClick(text);

  return (
    <StyledFilterTag onClick={onTagClick}>
      {text}
    </StyledFilterTag>
  );
};
