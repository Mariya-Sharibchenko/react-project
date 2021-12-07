import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Filter, IFilterComponentProps } from './Filter';

import { FilterByAge, FilterByCourse } from 'mock';

export default {
  title: 'TMS/Filters',
  component: Filter,
} as Meta;

const Template: Story<IFilterComponentProps> = (args) => <Filter {...args}/>;

export const ClosedFilter = Template.bind({});

ClosedFilter.args = {
  filterIsOpened: false,
  filterData: FilterByCourse,
};

export const OpenedFilter = Template.bind({});

OpenedFilter.args = {
  filterIsOpened: true,
  filterData: FilterByCourse,
};

export const ClosedSelectedFilter = Template.bind({});

ClosedSelectedFilter.args = {
  filterIsOpened: false,
  filterData: FilterByAge,
};

export const OpenedSelectedFilter = Template.bind({});

OpenedSelectedFilter.args = {
  filterIsOpened: true,
  filterData: FilterByAge,
};