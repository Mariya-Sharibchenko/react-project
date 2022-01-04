import React from 'react';

import styled from 'styled-components';

import { WrapperFieldForStudentCV, StudentCVInfoTitle, StudentCVInfoContent } from './styled';

interface ITextFieldForStudentCVProps {
  title: string,
  content: string,
}

const StudentCVInfoText = styled.p`
  margin: 0;
`;

export const TextFieldForStudentCV: React.FC<ITextFieldForStudentCVProps> = ({title, content}) => {
  return (
    <WrapperFieldForStudentCV>
      <StudentCVInfoTitle>{title}</StudentCVInfoTitle>

      <StudentCVInfoContent>
        <StudentCVInfoText>{content}</StudentCVInfoText>
      </StudentCVInfoContent>
    </WrapperFieldForStudentCV>
  )
};
