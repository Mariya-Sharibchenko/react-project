import styled from 'styled-components';

import { Colors } from 'context';

const { mainColor, secondaryText, filterBackground } = Colors;

interface StudentPictureProps {
  userPicture?: string,
}

interface StudentCardProps {
  active: boolean,
}

export const StudentPreviewCardWrapper = styled.div<StudentCardProps>`
  cursor: pointer;
  max-height: 132px;
  max-width: 369px;
  display: flex;
  flex-direction: row;
  border-bottom: ${({active}) => active 
          ? `4px solid ${mainColor}` 
          : `none`};
  box-shadow: 0 3px 9px rgba(225, 226, 230, 0.8);
  overflow: hidden;
`;

export const StudentPicture = styled.div<StudentPictureProps>`
  padding: 42px 24px;
  width: 100px;
  height: 132px;
  background: ${({userPicture}) => userPicture 
  ? `center no-repeat ${`url(${userPicture})`} ${mainColor}`
  : `${mainColor}`};
`;

export const StudentData = styled.div`
  padding: 29px 31px 27px;
  display: flex;
  flex-direction: column;
`;

export const StudentInitials = styled.p`
  margin: 0;
  font-size: 30px;
  font-weight: 700;
  line-height: 48px;
  text-align: center;
`;

export const StudentName = styled.h3`
  font-size: 16px;
  line-height: 24px;
  margin: 0;
`;

export const StudentAdditionalInfo = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: ${secondaryText};
  margin: 0 0 9px 0;
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const CourseTag = styled.div`
  padding: 0 6px;
  width: max-content;
  max-height: 16px;
  margin-right: 6px;
  font-size: 8px;
  line-height: 16px;
  text-align: center;
  background-color: ${mainColor};
  border-radius: 3px;
`;

export const BestStudentTag = styled(CourseTag)`
  background-color: ${filterBackground};
  color: ${secondaryText};
`;