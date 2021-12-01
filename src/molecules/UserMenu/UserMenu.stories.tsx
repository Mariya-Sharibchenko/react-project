import React from 'react';
import { Story, Meta } from '@storybook/react';

import { UserMenu, IUserMenuProps } from './UserMenu';

import { UserMenuItems } from 'mock';

export default {
  title: 'TMS/UserMenu',
  component: UserMenu,
} as Meta;

const Template: Story<IUserMenuProps> = (args) => <UserMenu {...args}/>;

export const DropDownMenu = Template.bind({});

DropDownMenu.args = {
  menuFields: UserMenuItems,
  userName: 'IBA Group Company '
};
