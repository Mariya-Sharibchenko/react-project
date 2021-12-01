import React from 'react';

import { IStudentDataProps, IMenuItemProps, INotificationsDataProps } from 'context';
import { UserMenuContainer } from 'molecules/UserMenu';

import {
  NavbarWrapper,
  LogoWrapper,
  MenuItemsWrapper,
  MenuItem,
  MenuItemLink,
  NotificationAndUserWrapper,
  NotificationsWrapper,
} from './styled';

export interface INavbarMenuProps {
  menuItems: IMenuItemProps[],
  userMenuItems: IMenuItemProps[],
  notifications: INotificationsDataProps,
  user: IStudentDataProps,
}

export const NavbarMenu: React.FC<INavbarMenuProps> = ({menuItems, userMenuItems, notifications, user}) => {
  return (
    <NavbarWrapper>
      <LogoWrapper/>

      <MenuItemsWrapper>
        {menuItems.map(({pathTo, itemText}) =>
          <MenuItem key={pathTo}>
            <MenuItemLink href={pathTo}>{itemText}</MenuItemLink>
          </MenuItem>
        )}
      </MenuItemsWrapper>

      <NotificationAndUserWrapper>
        <NotificationsWrapper notifications={notifications} />

        <UserMenuContainer menuFields={userMenuItems} user={user}/>
      </NotificationAndUserWrapper>
    </NavbarWrapper>
  )
};
