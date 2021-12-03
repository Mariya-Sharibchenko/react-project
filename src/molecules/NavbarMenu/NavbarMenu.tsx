import React, { useMemo} from 'react';

import { UserMenuContainer } from 'molecules/UserMenu';
import { useWindowSize } from 'utils/getWindowSize';
import { IStudentDataProps, IMenuItemProps, INotificationsDataProps } from 'context';
import { WindowSize } from 'context';

import {
  NavbarWrapper,
  LogoWrapper,
  MenuItemsWrapper,
  MenuItem,
  MenuItemLink,
  NotificationAndUserWrapper,
  NotificationsWrapper,
} from './styled';

const { tablet } = WindowSize;

export interface INavbarMenuProps {
  menuItems: IMenuItemProps[],
  userMenuItems: IMenuItemProps[],
  notifications: INotificationsDataProps,
  user: IStudentDataProps,
}

export const NavbarMenu: React.FC<INavbarMenuProps> = ({menuItems, userMenuItems, notifications, user}) => {
  const windowSize = useWindowSize();

  const smallSizeMenuData = useMemo(() => [...menuItems, ...userMenuItems], [menuItems, userMenuItems]);

  return (
    <NavbarWrapper>
      <LogoWrapper/>

      { windowSize && windowSize.width > tablet ?
        <>
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
        </> :

        <>
          <NotificationAndUserWrapper>
            <NotificationsWrapper notifications={notifications} />

            <UserMenuContainer menuFields={smallSizeMenuData} user={user}/>
          </NotificationAndUserWrapper>
        </>
      }
    </NavbarWrapper>
  )
};
