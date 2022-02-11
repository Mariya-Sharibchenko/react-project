import React from 'react';

import styled from 'styled-components';

import { BestStudentTag, Colors } from 'context';

import { ITagProps } from './interfaces';

const { mainColor, filterBackground, mainText, secondaryText } = Colors;

export interface IStyledTagProps {
  isBestStudent: boolean,
}

export interface ISmallTagProps extends IStyledTagProps, ITagProps {
}

const StyledTag = styled.div<IStyledTagProps>`
  padding: 0 6px;
  width: max-content;
  max-height: 16px;
  margin-right: 6px;
  font-size: 8px;
  line-height: 2;
  text-align: center;
  color: ${({isBestStudent}) => isBestStudent
          ? `${secondaryText}`
          : `${mainText}`};
  background-color: ${({isBestStudent}) => isBestStudent 
          ? `${filterBackground}` 
          : `${mainColor}`};
  border-radius: 3px;
`;

export const SmallTag: React.FC<ISmallTagProps> = ({ text, isBestStudent}) => {
  return (
    <StyledTag
      isBestStudent={isBestStudent}
    >
      { isBestStudent ? BestStudentTag : text }
    </StyledTag>
  );
};
