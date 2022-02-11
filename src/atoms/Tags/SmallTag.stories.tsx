import React from 'react';
import { Story, Meta } from '@storybook/react';

import { SmallTag, ISmallTagProps } from './SmallTag';

export default {
  title: 'TMS/Tags',
  component: SmallTag,
} as Meta;

const Template: Story<ISmallTagProps> = (args) => <SmallTag {...args} />;

export const SmallCourseTag = Template.bind({});

SmallCourseTag.args = {
  text: 'Front End',
  isBestStudent: false
};

export const SmallBestStudentTag = Template.bind({});

SmallBestStudentTag.args = {
  text: '',
  isBestStudent: true
};
