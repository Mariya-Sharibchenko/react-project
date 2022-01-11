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

export const InvitationWasAccepted = Template.bind({});

InvitationWasAccepted.args = {
  student: StudentArray[1],
  status: ResponseStatus.accepted,
  invitationDate: '19 февраля',
};

export const InvitationInOnConsidering = Template.bind({});

InvitationInOnConsidering.args = {
  student: StudentArray[0],
  status: ResponseStatus.considering,
  invitationDate: '19 февраля',
};
