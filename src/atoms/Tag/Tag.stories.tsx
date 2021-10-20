import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Tag, ITagProps } from './Tag';

export default {
  title: 'TMS/Tags',
  component: Tag,
} as Meta;

const Template: Story<ITagProps> = (args) => <Tag {...args}/>;

export const SmallTag = Template.bind({});

SmallTag.args = {
  text: 'Front End',
  isSmall: true,
  isBestStudent: false
};

export const TechnologyTag = Template.bind({});

TechnologyTag.args = {
  text: 'HTML',
  isSmall: false,
  isBestStudent: false
};

export const BestStudentTag = Template.bind({});

BestStudentTag.args = {
  text: 'Лучший ученик',
  isSmall: true,
  isBestStudent: true
};