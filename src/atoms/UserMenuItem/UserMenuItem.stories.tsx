import React from 'react';
import { Story, Meta } from '@storybook/react';

import { UserMenuItemProps } from 'context/interfaces';
import { UserMenuItems } from 'mock';

import { UserMenuItem } from './UserMenuItem';

export default {
  title: 'TMS/UserMenuItems',
  component: UserMenuItem,
} as Meta;

const Template: Story<UserMenuItemProps> = (args) => <UserMenuItem {...args}/>;

export const ActiveItem = Template.bind({});

ActiveItem.args = {
  ...UserMenuItems[0]
}
