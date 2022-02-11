import React from 'react';
import { Story, Meta } from '@storybook/react';

import { NotificationCounter, INotificationCounterProps } from './NotificationCounter';

export default {
  title: 'TMS/NotificationCounters',
  component: NotificationCounter,
} as Meta;

const Template: Story<INotificationCounterProps> = (args) => <NotificationCounter {...args} />;

export const NotificationCounterEmpty = Template.bind({});

NotificationCounterEmpty.args = {
  notifications: 0,
};

export const NotificationCounterOne = Template.bind({});

NotificationCounterOne.args = {
  notifications: 5,
};

export const NotificationCounterTwo = Template.bind({});

NotificationCounterTwo.args = {
  notifications: 101,
};
