import React from 'react';

import styled from 'styled-components';

import { Colors} from 'context';

import { ITagProps } from './interfaces';

const { mainColor, mainText } = Colors;

const StyledTag = styled.div`
  padding: 0 15px;
  width: max-content;
  max-height: 36px;
  margin-right: 6px;
  font-size: 14px;
  line-height: 2;
  text-align: center;
  color: ${mainText};
  background-color: ${mainColor};
  border-radius: 5px;
`;

export const Tag: React.FC<ITagProps> = ({ text, className}) => {
  return (
    <StyledTag className={className}>
      { text }
    </StyledTag>
  )
};