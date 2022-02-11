import React from 'react';
import { Story, Meta } from '@storybook/react';

import { UserMenu, IUserMenuComponentProps } from './UserMenu';

import { StudentArray, UserMenuItems } from 'mock';

export default {
  title: 'TMS/UserMenu',
  component: UserMenu,
} as Meta;

const Template: Story<IUserMenuComponentProps> = (args) => <UserMenu {...args} />;

export const DropDownMenu = Template.bind({});

DropDownMenu.args = {
  menuFields: UserMenuItems,
  user: StudentArray[0],
  menuIsOpened: true,
};
