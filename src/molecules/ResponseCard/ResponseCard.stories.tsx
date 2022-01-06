import React from 'react';
import { Meta, Story } from '@storybook/react';

import { ResponseStatus } from 'context';
import { IResponseCardProps, ResponseCard } from './ResponseCard';

import { StudentArray } from 'mock';

export default {
  title: 'TMS/ResponseCard',
  component: ResponseCard,
} as Meta;

const Template: Story<IResponseCardProps> = (args) => <ResponseCard {...args} />;

export const Response = Template.bind({});

Response.args = {
  student: StudentArray[1],
  status: ResponseStatus.rejected,
  invitationDate: '19 февраля',
};
