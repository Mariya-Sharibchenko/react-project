import React from 'react';
import { Story, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { SearchStudentContainer, ISearchStudentContainer } from './SearchStudentContainer';
import { StudentArray } from 'mock';
import { FiltersArray } from 'context';

export default {
  title: 'TMS/SearchStudent',
  component: SearchStudentContainer,
  decorators : [(Story) => (<MemoryRouter><Story /></MemoryRouter>)]
} as Meta;

const Template: Story<ISearchStudentContainer> = (args) => <SearchStudentContainer {...args} />;

export const SearchStudentBlock = Template.bind({});

SearchStudentBlock.args = {
  filters: FiltersArray,
  studentsInBookmarks: ['1', '3', '5'],
  studentsArray: StudentArray,
};
