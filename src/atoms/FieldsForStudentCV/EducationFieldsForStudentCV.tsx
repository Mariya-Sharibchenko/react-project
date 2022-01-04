import React from 'react';

import { EducationInfoForStudentCV } from 'atoms/DetailedFieldsForStudentCV';
import { IStudentEducationInfoProps } from 'context';

import { WrapperFieldForStudentCV, StudentCVInfoTitle, StudentCVInfoContent } from './styled';

interface IEducationFieldForStudentCVProps {
  title: string,
  education: IStudentEducationInfoProps,
}

export const EducationFieldForStudentCV: React.FC<IEducationFieldForStudentCVProps> = ({title, education}) => {
  const { formal, english, additional} = education;

  return (
    <WrapperFieldForStudentCV>
      <StudentCVInfoTitle>{title}</StudentCVInfoTitle>

      <StudentCVInfoContent>
        <EducationInfoForStudentCV formal={formal}
                                   additional={additional}
                                   english={english}
        />
      </StudentCVInfoContent>
    </WrapperFieldForStudentCV>
  )
};
