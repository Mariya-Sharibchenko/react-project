import React, { useLayoutEffect, useMemo, useRef, useState } from 'react';

import styled from 'styled-components';

import { Colors } from 'context';

import { IStudentImageProps } from './interfaces';
import { getInitials } from './utils/getInitials';

const { mainColor } = Colors;

interface IStudentInitials {
  elementHeight?: number,
}

const StyledStudentImage = styled.div<IStudentImageProps>`
  width: 100px;
  height: 132px;
  background: ${({userPicture}) => userPicture
    ? `center no-repeat ${`url(${userPicture})`} ${mainColor}`
    : `${mainColor}`};
  border-radius: 0;
  border: none;
  box-shadow: none;
`;

export const StudentInitials = styled.p<IStudentInitials>`
  margin: 0;
  font-size: ${({elementHeight}) => elementHeight && `${elementHeight/3}px`};
  font-weight: 700;
  line-height: ${({elementHeight}) => `${elementHeight}px`};
  text-align: center;
`;

export const StudentImage: React.FC<IStudentImageProps> = ({ userPicture, lastName, firstName, className, onImageClick}) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [ initialsSize, setInitialsSize ] = useState<number>();

  const initials = useMemo(() => getInitials(firstName, lastName), [firstName, lastName]);

  useLayoutEffect(() => {
    setInitialsSize(imageRef.current?.clientHeight);
  }, [])

  return (
    <StyledStudentImage
      userPicture={userPicture}
      lastName={lastName}
      firstName={firstName}
      className={className}
      ref={imageRef}
      onClick={onImageClick}
    >
      {!userPicture && <StudentInitials elementHeight={initialsSize}>{initials}</StudentInitials>}
    </StyledStudentImage>
  )
};