import React from 'react';

import { IStudentDataProps, IMenuItemProps, INotificationsDataProps } from 'context';

import {
  NavbarWrapper,
  LogoWrapper,
  MenuItemsWrapper,
  MenuItem,
  MenuItemLink,
  NotificationAndUserWrapper,
  NotificationsWrapper,
  UserImage,
  IUserDropDownMenuProps,
  UserDropDownMenu,
  UserMenuWrapper
} from './styled';


export interface INavbarMenuProps extends IUserDropDownMenuProps{
  menuItems: IMenuItemProps[],
  userMenuItems: IMenuItemProps[],
  notifications: INotificationsDataProps,
  isNotificationsOpened: boolean,
  user: IStudentDataProps,
}

export const NavbarMenu: React.FC<INavbarMenuProps> = ({menuItems, userMenuItems, notifications, isNotificationsOpened, user, displayUserMenu}) => {
  const { img, firstName, lastName, } = user;

  return (
    <NavbarWrapper>
      <LogoWrapper/>

      <MenuItemsWrapper>
        {menuItems.map(({pathTo, itemText}) => {
          return <MenuItem key={pathTo}>
            <MenuItemLink href={pathTo}>{itemText}</MenuItemLink>
          </MenuItem>
          }
        )}
      </MenuItemsWrapper>

      <NotificationAndUserWrapper>
        <NotificationsWrapper notifications={notifications} menuIsOpened={isNotificationsOpened}/>

        <UserMenuWrapper>
          <UserImage userPicture={img} lastName={lastName} firstName={firstName} />
          <UserDropDownMenu userName={lastName} displayUserMenu={displayUserMenu} menuFields={userMenuItems}/>
        </UserMenuWrapper>
      </NotificationAndUserWrapper>
    </NavbarWrapper>
  )
};
