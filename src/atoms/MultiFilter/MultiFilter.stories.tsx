import React from 'react';
import { Story, Meta } from '@storybook/react';

import { MultiFilter, IMultiFilterComponentProps } from './MultiFilter';

import { FilterByAge, FilterByCourse } from 'mock';

export default {
  title: 'TMS/MultiFilters',
  component: MultiFilter,
} as Meta;

const Template: Story<IMultiFilterComponentProps> = (args) => <MultiFilter {...args} />;

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
