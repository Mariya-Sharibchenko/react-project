import React from 'react';
import { Story, Meta } from '@storybook/react';

import { NotificationCounter, NotificationCounterProps } from './NotificationCounter';

export default {
  title: 'TMS/NotificationCounters',
  component: NotificationCounter,
} as Meta;

const Template: Story<NotificationCounterProps> = (args) => <NotificationCounter {...args}/>;

export const NotificationCounterEmpty = Template.bind({});

NotificationCounterEmpty.args = {
  notifications: 0,
};

export const NotificationCounterFull = Template.bind({});

NotificationCounterFull.args = {
  notifications: 5,
};