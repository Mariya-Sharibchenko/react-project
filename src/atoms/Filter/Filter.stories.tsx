import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Filter, FilterProps } from './Filter';

import { FilterByAge, FilterByCourse } from 'context';

export default {
  title: 'TMS/Filters',
  component: Filter,
} as Meta;

const Template: Story<FilterProps> = (args) => <Filter {...args}/>;

export const CourseFilter = Template.bind({});

CourseFilter.args = {
  optionsArray: FilterByCourse,
  selectAllText: 'Все курсы',
};

export const AgeFilter = Template.bind({});

AgeFilter.args = {
  optionsArray: FilterByAge,
  selectAllText: 'Любой',
};