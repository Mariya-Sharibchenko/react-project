import React from 'react';
import { Story, Meta } from '@storybook/react';

import { CourseAndScore, ICourseAndScoreProps } from './CourseAndScore';

export default {
  title: 'TMS/Tags',
  component: CourseAndScore,
} as Meta;

const Template: Story<ICourseAndScoreProps> = (args) => <CourseAndScore {...args}/>;

export const CourseAndScoreTag = Template.bind({});

CourseAndScoreTag.args = {
  course: 'Front End',
  score: 10
};
