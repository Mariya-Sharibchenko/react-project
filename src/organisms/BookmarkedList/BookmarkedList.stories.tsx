import React from 'react';
import { Story, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { BookmarkedList, IBookmarkedListProps } from './BookmarkedList';
import { StudentArray } from 'mock';

export default {
  title: 'TMS/BookmarkedList',
  component: BookmarkedList,
  decorators : [(Story) => (<MemoryRouter><Story /></MemoryRouter>)]
} as Meta;

const Template: Story<IBookmarkedListProps> = (args) => <BookmarkedList {...args} />;

export const BookmarkedStudentList = Template.bind({});

BookmarkedStudentList.args = {
  studentList: StudentArray,
  CVInBookmarks: [1,3,4,6],
  getSearchInputText: value => true
};
