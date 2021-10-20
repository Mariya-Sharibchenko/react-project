import React from 'react';

import styled from 'styled-components';

import { Colors, Shadow } from 'context';
import { getInitials } from './utils/getInitials';

const { mainColor, secondaryColor } = Colors;
const { shadow } = Shadow;

export interface IStyledStudentImageProps {
  userPicture?: string,
  firstName: string,
  lastName: string,
}

export interface IStudentImageProps extends IStyledStudentImageProps {
  isInCircle: boolean,
}

const StyledStudentImage = styled.div<IStudentImageProps>`
  padding: ${({isInCircle}) => isInCircle
          ? `10px 0`
          : `42px 24px`};
  width: ${({isInCircle}) => isInCircle
          ? `72px`
          : `100px`};
  height: ${({isInCircle}) => isInCircle
          ? `72px`
          : `132px`};
  background: ${({userPicture, isInCircle}) => userPicture
    ? `${isInCircle 
                  ? `center / cover no-repeat ${`url(${userPicture})`} ${mainColor}` 
                  : `center no-repeat ${`url(${userPicture})`} ${mainColor}`}`
    : `${mainColor}`};
  border-radius: ${({isInCircle}) => isInCircle
          ? `50%`
          : `0`};
  border: ${({isInCircle}) => isInCircle
          ? `1.5px solid ${secondaryColor}`
          : `none`};
  box-shadow: ${({isInCircle}) => isInCircle
          ? `${shadow}`
          : `none`};
`;

export const StudentInitials = styled.p`
  margin: 0;
  font-size: 30px;
  font-weight: 700;
  line-height: 48px;
  text-align: center;
`;

export const StudentImage: React.FC<IStudentImageProps> = ({ userPicture, lastName, firstName, isInCircle}) => {
  return (
    <StyledStudentImage
      userPicture={userPicture}
      lastName={lastName}
      firstName={firstName}
      isInCircle={isInCircle}
    >
      {userPicture ? <></> : <StudentInitials>{getInitials(firstName, lastName)}</StudentInitials>}
    </StyledStudentImage>
  )
};