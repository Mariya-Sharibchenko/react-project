import React from 'react';
import { Story, Meta } from '@storybook/react';

import { NavbarMenu, INavbarMenuProps } from './NavbarMenu';
import { NavbarMenuItems, StudentArray, UserMenuItems, NotificationsDataOne } from 'mock';

export default {
  title: 'TMS/NavbarMenu',
  component: NavbarMenu,
} as Meta;

const Template: Story<INavbarMenuProps> = (args) => <NavbarMenu {...args}/>;

export const Navbar = Template.bind({});

Navbar.args = {
  menuItems: NavbarMenuItems,
  userMenuItems: UserMenuItems,
  user: StudentArray[0],
  notifications: NotificationsDataOne,
};
