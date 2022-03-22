import React from 'react';
import { Story, Meta } from '@storybook/react';

import { NavbarMenu, INavbarMenuProps } from './NavbarMenu';
import { StudentArray, NotificationsDataOne } from 'mock';
import { CompanyMenuItems, UserMenuItems } from 'context';

export default {
  title: 'TMS/NavbarMenu',
  component: NavbarMenu,
} as Meta;

const Template: Story<INavbarMenuProps> = (args) => <NavbarMenu {...args} />;

export const Navbar = Template.bind({});

Navbar.args = {
  menuItems: CompanyMenuItems,
  userMenuItems: UserMenuItems,
  user: StudentArray[0],
  notifications: NotificationsDataOne,
};
