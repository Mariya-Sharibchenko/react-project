import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Filter, FilterProps } from './Filter';

import { FilterByAge, FilterByCourse } from 'mock';

export default {
  title: 'TMS/Filters',
  component: Filter,
} as Meta;

const Template: Story<FilterProps> = (args) => <Filter {...args}/>;

export const ClosedFilter = Template.bind({});

ClosedFilter.args = {
  filterIsOpened: false,
  optionsArray: FilterByCourse,
  selectedOptions: FilterByCourse,
  selectAllText: 'Все курсы',
};

export const ClosedSelectedFilter = Template.bind({});

ClosedSelectedFilter.args = {
  filterIsOpened: false,
  optionsArray: FilterByCourse,
  selectedOptions: [FilterByCourse[1], FilterByCourse[2]],
  selectAllText: 'Все курсы',
};

export const OpenedFilter = Template.bind({});

OpenedFilter.args = {
  filterIsOpened: true,
  optionsArray: FilterByAge,
  selectedOptions: FilterByAge,
  selectAllText: 'Любой',
};

export const OpenedSelectedFilter = Template.bind({});

OpenedSelectedFilter.args = {
  filterIsOpened: true,
  optionsArray: FilterByAge,
  selectedOptions: [FilterByAge[0], FilterByAge[3]],
  selectAllText: 'Любой',
};