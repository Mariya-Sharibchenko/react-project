import React from 'react';
import { Story, Meta } from '@storybook/react';

import { SearchStudent, ISearchStudentProps } from './SearchStudent';
import { FiltersArray, StudentArray } from 'mock';

export default {
  title: 'TMS/SearchStudent',
  component: SearchStudent,
} as Meta;

const Template: Story<ISearchStudentProps> = (args) => <SearchStudent {...args}/>;

export const SearchStudentBlock = Template.bind({});

SearchStudentBlock.args = {
  filters: FiltersArray,
  CVInBookmarks: [1, 3, 5],
  studentList: StudentArray,
};
