import React, { useMemo } from 'react';

import { ICompanyDataProps, IStudentDataProps } from 'context';
import { StyledUserImage, UserInitials } from './styled';
import { getUserInitials } from './utils/getUserInitials';

export interface IUserImageProps {
  user: IStudentDataProps | ICompanyDataProps,
  onImageClick: () => void,
}

export const UserImage: React.FC<IUserImageProps> = ({ user, onImageClick }) => {
  const userInitials = useMemo(() => getUserInitials(user), [user]);

  return (
    <>
      { 'img' in user ?
        <StyledUserImage
          onClick={onImageClick}
          userImg={user.img}
        /> :
        <StyledUserImage onClick={onImageClick}>
          <UserInitials>{userInitials}</UserInitials>
        </StyledUserImage>
      }
    </>
  );
};
