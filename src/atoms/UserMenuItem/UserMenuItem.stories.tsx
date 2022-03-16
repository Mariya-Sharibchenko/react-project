import React from 'react';
import { Story, Meta } from '@storybook/react';

import { IMenuItemProps, UserMenuItems } from 'context';

import { UserMenuItem } from './UserMenuItem';

export default {
  title: 'TMS/UserMenu',
  component: UserMenuItem,
} as Meta;

const Template: Story<IMenuItemProps> = (args) => <UserMenuItem {...args} />;

export const MenuItem = Template.bind({});

MenuItem.args = {
  ...UserMenuItems[0]
};
