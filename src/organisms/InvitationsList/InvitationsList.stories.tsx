import React from 'react';
import { Story, Meta } from '@storybook/react';

import { InvitationsList, IInvitationsListProps } from './InvitationsList';
import { InvitationsArray } from 'mock/invitationData';
import { ResponseStatus } from 'context';

export default {
  title: 'TMS/InvitationsList',
  component: InvitationsList,
} as Meta;

const Template: Story<IInvitationsListProps> = (args) => <InvitationsList {...args} />;

export const Invitations = Template.bind({});

Invitations.args = {
  invitationsList: InvitationsArray,
  filteredStatus: ResponseStatus.rejected,
  setFilterStatusOption: value => true,
  setFilterDateOption: value => true,
};
