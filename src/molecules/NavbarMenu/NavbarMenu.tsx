import React from 'react';

import { IStudentDataProps, MenuItemProps, NotificationsDataProps } from 'context';

import {
  NavbarWrapper,
  LogoWrapper,
  MenuItemsWrapper,
  MenuItem,
  MenuItemLink,
  NotificationAndUserWrapper,
  NotificationsWrapper,
  UserImage,
  UserDropDownMenuProps,
  UserDropDownMenu,
  UserMenuWrapper
} from './styled';


export interface NavbarMenuProps extends UserDropDownMenuProps{
  menuItems: MenuItemProps[],
  userMenuItems: MenuItemProps[],
  notifications: NotificationsDataProps,
  isNotificationsOpened: boolean,
  user: IStudentDataProps,
}

export const NavbarMenu: React.FC<NavbarMenuProps> = ({menuItems, userMenuItems, notifications, isNotificationsOpened, user, displayUserMenu}) => {
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
