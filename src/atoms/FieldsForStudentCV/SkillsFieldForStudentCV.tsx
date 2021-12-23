import React from 'react';

import styled from 'styled-components';

import { WrapperFieldForStudentCV, StudentCVInfoTitle, StudentCVInfoContent } from './styled';
import { Tag } from 'atoms/Tags';

interface ISkillsFieldForStudentCVProps {
  title: string,
  skills: string[],
}

export const StudentCVSkillsList = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const StudentCVSkillsItem = styled.li`
  width: fit-content;
  height: fit-content;
  
  &:first-child {
    margin-bottom: 12px;
  }
  &:not(:last-child) {
    margin-right: 12px;
  };
`;

export const StudentCVTag = styled(Tag)`
  margin: 0;
  padding: 5px 15px;
  height: 36px;
`;

export const SkillsFieldForStudentCV: React.FC<ISkillsFieldForStudentCVProps> = ({title, skills}) => {
  return (
    <WrapperFieldForStudentCV>
      <StudentCVInfoTitle>{title}</StudentCVInfoTitle>

      <StudentCVInfoContent>
        <StudentCVSkillsList>
          {skills.map((item) =>
            <StudentCVSkillsItem key={item}>
              <StudentCVTag text={item}/>
            </StudentCVSkillsItem>
          )}
        </StudentCVSkillsList>
      </StudentCVInfoContent>
    </WrapperFieldForStudentCV>
  )
};
