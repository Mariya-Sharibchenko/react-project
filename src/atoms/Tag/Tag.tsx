import React from 'react';

import styled from 'styled-components';

import { Colors } from 'context';

const { mainColor, filterBackground, mainText, secondaryText } = Colors

export interface IStyledTagProps {
  isBestStudent: boolean,
  isSmall: boolean,
}

export interface ITagProps extends IStyledTagProps{
  text: string
}

const StyledTag = styled.div<ITagProps>`
  padding: ${({isSmall}) => isSmall
          ? `0 6px`
          : `0 15px`};
  width: max-content;
  max-height: ${({isSmall}) => isSmall
          ? `16px`
          : `36px`};
  margin-right: 6px;
  font-size: ${({isSmall}) => isSmall
          ? `8px`
          : `14px`};
  line-height: 2;
  text-align: center;
  color: ${({isBestStudent}) => isBestStudent
          ? `${secondaryText}`
          : `${mainText}`};
  background-color: ${({isBestStudent}) => isBestStudent
          ? `${filterBackground}`
          : `${mainColor}`};
  border-radius: ${({isSmall}) => isSmall
          ? `3px`
          : `5px`};
`;

export const Tag: React.FC<ITagProps> = ({ text, isBestStudent, isSmall}) => {
  return (
    <StyledTag
      isSmall={isSmall}
      isBestStudent={isBestStudent}
      text={text}
    >
      {text}
    </StyledTag>
  )
};