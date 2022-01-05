import React from 'react';
import { Story, Meta } from '@storybook/react';

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
  status: 'На рассмотрении',
  responseDate: '19 февраля',
};
