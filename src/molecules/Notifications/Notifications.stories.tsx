import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Notifications, NotificationsProps } from './Notifications';

import {
  NotificationsDataOne,
  NotificationsDataTwo,
  NotificationsDataEmpty
} from 'mock/notificationsData';

export default {
  title: 'TMS/Notifications',
  component: Notifications,
} as Meta;

const Template: Story<NotificationsProps> = (args) => <Notifications {...args}/>;

export const NotificationsEmpty = Template.bind({});

NotificationsEmpty.args = {
  notifications: NotificationsDataEmpty,
  menuIsOpened: true
};

export const NotificationsOne = Template.bind({});

NotificationsOne.args = {
  notifications: NotificationsDataOne,
  menuIsOpened: true
};

export const NotificationsTwo = Template.bind({});

NotificationsTwo.args = {
  notifications: NotificationsDataTwo,
  menuIsOpened: true
};
