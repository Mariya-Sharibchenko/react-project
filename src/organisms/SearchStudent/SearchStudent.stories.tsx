import React from 'react';
import { Story, Meta } from '@storybook/react';

import { SearchStudentContainer, ISearchStudentContainer } from './SearchStudentContainer';
import { FiltersArray, StudentArray } from 'mock';

export default {
  title: 'TMS/SearchStudent',
  component: SearchStudentContainer,
} as Meta;

const Template: Story<ISearchStudentContainer> = (args) => <SearchStudentContainer {...args}/>;

export const SearchStudentBlock = Template.bind({});

SearchStudentBlock.args = {
  filters: FiltersArray,
  studentsInBookmarks: [1, 3, 5],
  studentsArray: StudentArray,
};
