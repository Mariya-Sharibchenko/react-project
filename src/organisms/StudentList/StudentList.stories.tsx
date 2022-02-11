import React from 'react';
import { Story, Meta } from '@storybook/react';

import { StudentList, IStudentListProps } from './StudentList';
import { StudentArray } from 'mock';

export default {
  title: 'TMS/StudentList',
  component: StudentList,
} as Meta;

const Template: Story<IStudentListProps> = (args) => <StudentList {...args}/>;

export const List = Template.bind({});

List.args = {
  studentList: StudentArray,
  activeStudent: StudentArray[1],
  markedCV: [1, 2],
  setFilterOptions: (options) => true,
};
