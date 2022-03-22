import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ResponsesList, IResponsesListProps } from './ResponsesList';
import { ResponsesArray } from 'mock';
import { FilterByDate, FilterByStatus, ResponseStatus } from 'context';

export default {
  title: 'TMS/ResponsesList',
  component: ResponsesList,
} as Meta;

const Template: Story<IResponsesListProps> = (args) => <ResponsesList {...args} />;

export const Responses = Template.bind({});

Responses.args = {
  responsesList: ResponsesArray,
  filterByDate: FilterByDate,
  filterByStatus: FilterByStatus,
  selectedStatus: ResponseStatus.rejected,
  setFilterStatusOption: value => true,
  setFilterDateOption: value => true,
};
