import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ITagProps } from 'context';

import { Tag } from './Tag';

export default {
  title: 'TMS/Tags',
  component: Tag,
} as Meta;

const Template: Story<ITagProps> = (args) => <Tag {...args}/>;

export const CourseTag = Template.bind({});

CourseTag.args = {
  text: 'Front End',
};

