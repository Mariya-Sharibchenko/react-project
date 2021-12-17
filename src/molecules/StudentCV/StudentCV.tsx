import React, { useMemo } from 'react';

import { InviteButtonText, IStudentDataProps } from 'context';
import { getAgeString } from 'utils/getAgeString';

import {
  StudentCVWrapper,
  StudentCVHeader,
  StudentCVMainBtnsWrapper,
  StudentCVMainInfoWrapper,
  StudentName,
  StudentCourseAndAge,
  ButtonInvite, StudentCVBody
} from './styled';
import { BookmarkButton } from '../../atoms/BookmarkButton';

export interface IStudentCVProps {
  student: IStudentDataProps,
  isMarked: boolean,
}

export const StudentCV: React.FC<IStudentCVProps> = ({ student, isMarked}) => {
  const {img, firstName, lastName, position, age} = student;

  const ageString = useMemo(() => age && `, ${getAgeString(age)}`, [age]);

  return (
    <StudentCVWrapper>
      <StudentCVHeader img={img}>
        <StudentCVMainInfoWrapper>
          <StudentName>{firstName} {lastName}</StudentName>

          <StudentCourseAndAge>{position}{ageString}</StudentCourseAndAge>
        </StudentCVMainInfoWrapper>

        <StudentCVMainBtnsWrapper>
          <ButtonInvite text={InviteButtonText}/>

          <BookmarkButton isMarked={isMarked}/>
        </StudentCVMainBtnsWrapper>
      </StudentCVHeader>

      <StudentCVBody>

      </StudentCVBody>
    </StudentCVWrapper>
  )
};
