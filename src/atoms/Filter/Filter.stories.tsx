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
  filterTitle: FilterByCourse.filterTitle,
  selectAllText: FilterByCourse.selectAllText,
  optionsArray: FilterByCourse.optionsArray,
};

export const OpenedFilter = Template.bind({});

OpenedFilter.args = {
  filterIsOpened: true,
  filterTitle: FilterByCourse.filterTitle,
  selectAllText: FilterByCourse.selectAllText,
  optionsArray: FilterByCourse.optionsArray,
};

export const ClosedSelectedFilter = Template.bind({});

ClosedSelectedFilter.args = {
  filterIsOpened: false,
  filterTitle: FilterByAge.filterTitle,
  selectAllText: FilterByAge.selectAllText,
  optionsArray: FilterByAge.optionsArray,
};

export const OpenedSelectedFilter = Template.bind({});

OpenedSelectedFilter.args = {
  filterIsOpened: true,
  filterTitle: FilterByAge.filterTitle,
  selectAllText: FilterByAge.selectAllText,
  optionsArray: FilterByAge.optionsArray,
};
