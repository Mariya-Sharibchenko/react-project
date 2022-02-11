import React from 'react';

import { StudentImage, StudentData } from 'atoms';
import { IStudentDataProps } from 'context';
import { StudentPreviewCardWrapper } from './styled';

export interface IStudentProps {
  student: IStudentDataProps
}

export interface IStudentPreviewCard extends IStudentProps {
  onCardClick: (studentId: number) => void,
  isCardActive: boolean,
}

export const StudentPreviewCard: React.FC<IStudentPreviewCard> = ({
  student,
  isCardActive,
  onCardClick
}) => {
  const { img, firstName, lastName, id } = student;

  const onClick = () => {
    onCardClick(id);
  };

  return (
    <StudentPreviewCardWrapper active={isCardActive} onClick={onClick}>
      <StudentImage userPicture={img} firstName={firstName} lastName={lastName} />

      <StudentData student={student} />
    </StudentPreviewCardWrapper>
  );
};

