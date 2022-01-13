import React from 'react';
import { Meta, Story } from '@storybook/react';

import { ResponseStatus } from 'context';
import { IInvitationCardProps, InvitationCard } from './InvitationCard';
import { CompaniesArray } from 'mock';


export default {
  title: 'TMS/InvitationCard',
  component: InvitationCard,
} as Meta;

const Template: Story<IInvitationCardProps> = (args) => <InvitationCard {...args} />;

export const InvitationWasAccepted = Template.bind({});

InvitationWasAccepted.args = {
  status: ResponseStatus.accepted,
  company: CompaniesArray[1],
  invitationDate: '19 февраля',
};

export const InvitationInOnConsidering = Template.bind({});

InvitationInOnConsidering.args = {
  status: ResponseStatus.considering,
  company: CompaniesArray[0],
  invitationDate: '19 февраля',
};

export const InvitationWasRejected = Template.bind({});

InvitationWasRejected.args = {
  status: ResponseStatus.rejected,
  company: CompaniesArray[0],
  invitationDate: '19 февраля',
};
