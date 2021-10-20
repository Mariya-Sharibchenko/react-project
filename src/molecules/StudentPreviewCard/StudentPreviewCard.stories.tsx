import React from 'react';
import { Story, Meta } from '@storybook/react';

import { StudentPreviewCard } from './StudentPreviewCard';

import { StudentArray, IStudentDataProps } from 'context';

export default {
  title: 'TMS/StudentPreviewCard',
  component: StudentPreviewCard,
} as Meta;

const Template: Story<IStudentDataProps> = (args) => <StudentPreviewCard {...args}/>;

export const FirstStudent = Template.bind({});

FirstStudent.args = {...StudentArray[0]};

export const SecondStudent = Template.bind({});

SecondStudent.args = {...StudentArray[1]};