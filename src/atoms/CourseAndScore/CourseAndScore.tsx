import React from 'react';

import styled from 'styled-components';

import { Colors} from 'context';

const { mainColor, mainText, backgroundColor, secondaryColor } = Colors;

export interface ICourseAndScoreProps {
  course: string,
  score: number,
}

const CourseAndScoreWrapper = styled.div`
  max-height: 36px;
  font-size: 14px;
  line-height: 2;
  font-weight: 600;
  display: flex;
`;

const Course = styled.div`
  width: fit-content;
  height: 100%;
  padding: 0 15px;
  color: ${mainText};
  background-color: ${mainColor};
  border-radius: 5px 0 0 5px;
`;

const Score = styled.div`
  width: fit-content;
  height: 100%;
  padding: 0 15px;
  color: ${secondaryColor};
  background-color: ${backgroundColor};
  border-radius: 0 5px 5px 0;
`;

export const CourseAndScore: React.FC<ICourseAndScoreProps> = ({ course, score}) => {
  return (
    <CourseAndScoreWrapper>
      <Course>{course}</Course>
      <Score>{score}</Score>
    </CourseAndScoreWrapper>
  );
};
