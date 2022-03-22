import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Filter, IFilterComponentProps } from './Filter';

import { FilterByStatus } from 'context';

export default {
  title: 'TMS/Filters',
  component: Filter,
} as Meta;

const Template: Story<IFilterComponentProps> = (args) => <Filter {...args} />;

export const ClosedFilter = Template.bind({});

ClosedFilter.args = {
  filterIsOpened: false,
  filterTitle: FilterByStatus.filterTitle,
  optionsArray: FilterByStatus.optionsArray,
};

export const OpenedFilter = Template.bind({});

OpenedFilter.args = {
  filterIsOpened: true,
  filterTitle: FilterByStatus.filterTitle,
  optionsArray: FilterByStatus.optionsArray,
};
