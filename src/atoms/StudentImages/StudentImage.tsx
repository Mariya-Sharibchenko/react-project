import React, { useMemo } from 'react';

import styled from 'styled-components';

import { Colors } from 'context';

import { getInitials } from './utils/getInitials';

const { mainColor } = Colors;

export interface IStudentImageProps {
  userPicture?: string,
  firstName: string,
  lastName: string,
  className?: string,
}

const StyledStudentImage = styled.div<IStudentImageProps>`
  padding: 42px 24px;
  width: 100px;
  height: 132px;
  background: ${({userPicture}) => userPicture
    ? `center no-repeat ${`url(${userPicture})`} ${mainColor}`
    : `${mainColor}`};
  border-radius: 0;
  border: none;
  box-shadow: none;
`;

export const StudentInitials = styled.p`
  margin: 0;
  font-size: 30px;
  font-weight: 700;
  line-height: 48px;
  text-align: center;
`;

export const StudentImage: React.FC<IStudentImageProps> = ({ userPicture, lastName, firstName, className}) => {
  const initials = useMemo(() => getInitials(firstName, lastName), [firstName, lastName]);

  return (
    <StyledStudentImage
      userPicture={userPicture}
      lastName={lastName}
      firstName={firstName}
      className={className}
    >
      {!userPicture && <StudentInitials>{initials}</StudentInitials>}
    </StyledStudentImage>
  )
};