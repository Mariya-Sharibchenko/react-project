import React from 'react';
import { Story, Meta } from '@storybook/react';

import { InvitationsList, IInvitationsListProps } from './InvitationsList';
import { FilterByDate, FilterByStatus, InvitationsArray } from 'mock';
import { ResponseStatus } from 'context';

export default {
  title: 'TMS/InvitationsList',
  component: InvitationsList,
} as Meta;

const Template: Story<IInvitationsListProps> = (args) => <InvitationsList {...args} />;

export const Invitations = Template.bind({});

Invitations.args = {
  invitationsList: InvitationsArray,
  filterByDate: FilterByDate,
  filterByStatus: FilterByStatus,
  selectedStatus: ResponseStatus.rejected,
  setFilterStatusOption: value => true,
  setFilterDateOption: value => true,
};
