import React from 'react';
import { Story, Meta } from '@storybook/react';

import { StudentCV, IStudentCVProps } from './StudentCV';

import { StudentArray } from 'mock';

export default {
  title: 'TMS/StudentCV',
  component: StudentCV,
} as Meta;

const Template: Story<IStudentCVProps> = (args) => <StudentCV {...args} />;

export const StudentCVNotMarked = Template.bind({});

StudentCVNotMarked.args = {
  student: StudentArray[0],
  isMarked: false,
};

export const StudentCVMarked = Template.bind({});

StudentCVMarked.args = {
  student: StudentArray[1],
  isMarked: true,
};
