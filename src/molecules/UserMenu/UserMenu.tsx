import React from 'react';

import { IMenuItemProps, IStudentDataProps } from 'context';
import { UserMenuItem } from 'atoms/UserMenuItem';

import { UserMenuWrapper, UserImage, DropDownWindowWrapper, UserMenuTitle, UserMenuItemWrapper, UserMenuItemsWrapper } from './styled';

export interface IUserMenuProps {
  user: IStudentDataProps,
  menuFields: IMenuItemProps[],
}

export interface IUserMenuComponentProps extends IUserMenuProps {
  menuIsOpened: boolean,
  showMenu: () => void,

  className?: string
}

export const UserMenu: React.FC<IUserMenuComponentProps> = ({menuFields, user, menuIsOpened, showMenu, className}) => {
  const { img, lastName, firstName } = user;

  return (
    <UserMenuWrapper>
      <UserImage userPicture={img} lastName={lastName} firstName={firstName} onImageClick={showMenu} />

      { menuIsOpened &&
      <DropDownWindowWrapper>
        <UserMenuTitle>{firstName} {lastName}</UserMenuTitle>

        <UserMenuItemsWrapper>
          {menuFields.map(({pathTo, icon, itemText}) =>
            <UserMenuItemWrapper key={pathTo}>
              <UserMenuItem pathTo={pathTo} icon={icon} itemText={itemText} />
            </UserMenuItemWrapper>
          )}
        </UserMenuItemsWrapper>
      </DropDownWindowWrapper>}
    </UserMenuWrapper>
  );
};
