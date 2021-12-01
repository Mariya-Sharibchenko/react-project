import React from 'react';
import { Story, Meta } from '@storybook/react';

import { IMenuItemProps } from 'context/interfaces';
import { UserMenuItems } from 'mock';

import { UserMenuItem } from './UserMenuItem';

export default {
  title: 'TMS/UserMenu',
  component: UserMenuItem,
} as Meta;

const Template: Story<IMenuItemProps> = (args) => <UserMenuItem {...args}/>;

export const MenuItem = Template.bind({});

MenuItem.args = {
  ...UserMenuItems[0]
}