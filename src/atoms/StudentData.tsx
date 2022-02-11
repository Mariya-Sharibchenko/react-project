import React, { useMemo } from 'react';

import styled from 'styled-components';

import { IStudentDataProps, Colors } from 'context';
import { getAgeString } from 'utils/getAgeString';
import { SmallTag } from './Tags';

const { secondaryText } = Colors;

export interface IStudentProps {
  student: IStudentDataProps,
  className?: string,
}

const StyledStudentData = styled.div`
  padding: 29px 31px 27px;
  display: flex;
  flex-direction: column;
`;

const StudentName = styled.h3`
  font-size: 16px;
  line-height: 24px;
  margin: 0;
`;

const StudentAdditionalInfo = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: ${secondaryText};
  margin: 0 0 9px 0;
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const StudentData: React.FC<IStudentProps> = ({ student, className }) => {
  const { firstName, lastName, position, age, course, bestStudentMark } = student;

  const ageString = useMemo(() => age && `, ${getAgeString(age)}`, [age]);

  return (
    <StyledStudentData className={className}>
      <StudentName>{firstName} {lastName}</StudentName>

      <StudentAdditionalInfo>{position}{ageString}</StudentAdditionalInfo>

      <TagsWrapper>
        <SmallTag isBestStudent={false} text={course} />
        { bestStudentMark && <SmallTag isBestStudent={bestStudentMark} text='' /> }
      </TagsWrapper>
    </StyledStudentData>
  );
};
