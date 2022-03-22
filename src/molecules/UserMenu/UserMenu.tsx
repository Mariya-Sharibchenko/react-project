import React from 'react';

import { ICompanyDataProps, IMenuItemProps, IStudentDataProps } from 'context';
import { UserMenuItem, UserImage } from 'atoms';
import {
  UserMenuWrapper,
  DropDownWindowWrapper,
  UserMenuTitle,
  UserMenuItemWrapper,
  UserMenuItemsWrapper
} from './styled';

export interface IUserMenuProps {
  user: IStudentDataProps | ICompanyDataProps,
  menuFields: IMenuItemProps[],
}

export interface IUserMenuComponentProps extends IUserMenuProps {
  menuIsOpened: boolean,
  showMenu: () => void,

  className?: string
}

export const UserMenu: React.FC<IUserMenuComponentProps> = ({
  menuFields,
  user,
  menuIsOpened,
  showMenu,
  className
}) => {
  return (
    <UserMenuWrapper>
      <UserImage user={user} onImageClick={showMenu} />

      { menuIsOpened &&
      <DropDownWindowWrapper>
        <UserMenuTitle>{'name' in user ? user.name : `${user.firstName} ${user.lastName}` }</UserMenuTitle>

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
