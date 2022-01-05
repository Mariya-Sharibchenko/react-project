import React from 'react';

import { IStudentDetailedDataProps } from 'context';
import { Checkbox } from 'atoms/Checkbox';
import { StudentImageInCircle } from 'atoms/StudentImages';
import { StudentData } from 'atoms/StudentData';

import { StyledResponseCard, StudentInfoWrapper, StatusCheckbox, StyledStudentData } from './styled';

export interface IResponseCardProps {
  status: string,
  onStatusCheckboxClick: (evt: React.ChangeEvent<HTMLInputElement>) => void,
  isStatusChecked: boolean,
  student: IStudentDetailedDataProps,
  responseDate: string,
}

export const ResponseCard: React.FC<IResponseCardProps> = ({
  status,
  onStatusCheckboxClick,
  isStatusChecked,
  responseDate,
  student
}) => {
  const { img, firstName, lastName } = student;

  return (
    <StyledResponseCard>
      <StatusCheckbox value={status} onCheckboxSelect={onStatusCheckboxClick} isChecked={isStatusChecked}/>

      <StudentInfoWrapper>
        <StudentImageInCircle
          userPicture={img}
          lastName={lastName}
          firstName={firstName}
        />

        <StyledStudentData student={student} />
      </StudentInfoWrapper>

      <div>{responseDate}</div>
    </StyledResponseCard>
  )
};
