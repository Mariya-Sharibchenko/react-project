import React from 'react';

import styled from 'styled-components';

import { Colors } from 'context';

import { WrapperFieldForStudentCV, StudentCVInfoTitle, StudentCVInfoContent } from './styled';

const { mainText } = Colors;

interface IDiplomaLinkFieldForStudentCVProps {
  title: string,
  link: string,
  text: string,
}

export const StudentCVDiplomaLink = styled.a`
  color: ${mainText};
  text-decoration: underline;
`;

export const DiplomaLinkFieldForStudentCV: React.FC<IDiplomaLinkFieldForStudentCVProps> = ({title, link, text}) => {
  return (
    <WrapperFieldForStudentCV>
      <StudentCVInfoTitle>{title}</StudentCVInfoTitle>

      <StudentCVInfoContent>
        <StudentCVDiplomaLink href={link}>{text}</StudentCVDiplomaLink>
      </StudentCVInfoContent>
    </WrapperFieldForStudentCV>
  );
};
