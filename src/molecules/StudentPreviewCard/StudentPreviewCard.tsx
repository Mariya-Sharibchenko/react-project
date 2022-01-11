import React from 'react';

import { StudentImage } from 'atoms/StudentImages';
import { StudentData} from 'atoms/StudentData';
import { IStudentDataProps } from 'context';

import { StudentPreviewCardWrapper } from './styled';

export interface IStudentProps {
  student: IStudentDataProps
}

export interface IStudentPreviewCard extends IStudentProps {
  onCardClick: () => void,
  isCardActive: boolean,
}

export const StudentPreviewCard: React.FC<IStudentPreviewCard> = ({
  student,
  isCardActive ,
  onCardClick
}) => {
  const { img, firstName, lastName } = student;

  return (
    <StudentPreviewCardWrapper active={isCardActive} onClick={onCardClick}>
      <StudentImage userPicture={img} firstName={firstName} lastName={lastName}/>

      <StudentData student={student}/>
    </StudentPreviewCardWrapper>
  )
};

