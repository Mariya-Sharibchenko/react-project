import React from 'react';
import { Story, Meta } from '@storybook/react';

import { NavbarMenu, INavbarMenuProps } from './NavbarMenu';
import { NavbarMenuItems, StudentArray, UserMenuItems } from 'mock';
import { NotificationsDataOne } from '../../mock/notificationsData';

export default {
  title: 'TMS/NavbarMenu',
  component: NavbarMenu,
} as Meta;

const Template: Story<INavbarMenuProps> = (args) => <NavbarMenu {...args}/>;

export const NavbarUserMenuOpened = Template.bind({});

NavbarUserMenuOpened.args = {
  menuItems: NavbarMenuItems,
  userMenuItems: UserMenuItems,
  user: StudentArray[0],
  displayUserMenu: true,
  isNotificationsOpened: false,
  notifications: NotificationsDataOne,
};

export const NavbarNotificationsOpened = Template.bind({});

NavbarNotificationsOpened.args = {
  menuItems: NavbarMenuItems,
  userMenuItems: UserMenuItems,
  user: StudentArray[0],
  displayUserMenu: false,
  isNotificationsOpened: true,
  notifications: NotificationsDataOne,
};