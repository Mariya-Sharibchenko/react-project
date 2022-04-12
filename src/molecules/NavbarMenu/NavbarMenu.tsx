import React, { useMemo} from 'react';
import { Link } from 'react-router-dom';

import { UserMenuContainer } from 'molecules';
import { useWindowSize } from 'utils/getWindowSize';
import { IStudentDataProps, IMenuItemProps, INotificationsDataProps, ICompanyDataProps } from 'context';
import { WindowSize } from 'context';

import {
  NavbarWrapper,
  LogoWrapper,
  MenuItemsWrapper,
  MenuItem,
  NotificationAndUserWrapper,
  NotificationsWrapper,
} from './styled';

const { tablet } = WindowSize;

interface INotificationAndUserProps {
  notifications: INotificationsDataProps,
  user: IStudentDataProps | ICompanyDataProps,
  menuFields: IMenuItemProps[],
}

export interface INavbarMenuProps extends Omit<INotificationAndUserProps, 'menuFields'> {
  menuItems: IMenuItemProps[],
  userMenuItems: IMenuItemProps[],
}

const NotificationsAndUser: React.FC<INotificationAndUserProps> = ({
  notifications,
  menuFields,
  user
}) => {

  return (
      <NotificationAndUserWrapper>
        <NotificationsWrapper notifications={notifications} />

        <UserMenuContainer menuFields={menuFields} user={user} />
      </NotificationAndUserWrapper>
    );
};

export const NavbarMenu: React.FC<INavbarMenuProps> = ({
  menuItems,
  userMenuItems,
  notifications,
  user
}) => {

  const windowSize = useWindowSize();

  const smallSizeMenuData = useMemo(() => [...menuItems, ...userMenuItems], [menuItems, userMenuItems]);

  return (
    <NavbarWrapper>
      <LogoWrapper />

      { windowSize && windowSize.width > tablet ?
        <>
          <MenuItemsWrapper>
            {menuItems.map(({pathTo, itemText}) =>
              <MenuItem key={pathTo}>
                <Link to={pathTo}>{itemText}</Link>
              </MenuItem>
            )}
          </MenuItemsWrapper>

          <NotificationsAndUser user={user} menuFields={userMenuItems} notifications={notifications} />
        </> :

        <NotificationsAndUser user={user} menuFields={smallSizeMenuData} notifications={notifications} />
      }
    </NavbarWrapper>
  );
};
