import React from 'react';
import { Meta, Story } from '@storybook/react';

import { IInvitationCardProps, InvitationCard } from './InvitationCard';
import { InvitationArateg, InvitationIBA, InvitationItransition } from 'mock/invitationData';


export default {
  title: 'TMS/InvitationCard',
  component: InvitationCard,
} as Meta;

const Template: Story<IInvitationCardProps> = (args) => <InvitationCard {...args} />;

export const InvitationWasAccepted = Template.bind({});

InvitationWasAccepted.args = {
  invitation: InvitationArateg
};

export const InvitationInOnConsidering = Template.bind({});

InvitationInOnConsidering.args = {
  invitation: InvitationIBA
};

export const InvitationWasRejected = Template.bind({});

InvitationWasRejected.args = {
  invitation: InvitationItransition
};
