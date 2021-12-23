import React from 'react';

import { CourseAndScore } from 'atoms/CourseAndScore';

import { WrapperFieldForStudentCV, StudentCVInfoTitle, StudentCVInfoContent } from './styled';

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
