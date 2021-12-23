import React from 'react';

import { WrapperFieldForStudentCV, StudentCVInfoTitle, StudentCVInfoContent } from './styled';
import { CourseAndScore } from 'atoms/CourseAndScore';

interface ICourseFieldForStudentCVProps {
  title: string,
  course: string,
  score: number,
}

export const CourseFieldForStudentCV: React.FC<ICourseFieldForStudentCVProps> = ({title, course, score}) => {
  return (
    <WrapperFieldForStudentCV>
      <StudentCVInfoTitle>{title}</StudentCVInfoTitle>

      <StudentCVInfoContent>
        <CourseAndScore course={course} score={score}/>
      </StudentCVInfoContent>
    </WrapperFieldForStudentCV>
  )
};
