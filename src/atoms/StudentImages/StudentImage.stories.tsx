import React from 'react';
import { Story, Meta } from '@storybook/react';

import { StudentArray } from 'mock';

import { IStudentImageProps } from './interfaces';
import { StudentImage } from './StudentImage';

export default {
  title: 'TMS/StudentImages',
  component: StudentImage,
} as Meta;

const Template: Story<IStudentImageProps> = (args) => <StudentImage {...args}/>;

export const NoImageOnCard = Template.bind({});

NoImageOnCard.args = {
  ...StudentArray[0],
};

export const ImageOnCard = Template.bind({});

ImageOnCard.args = {
  ...StudentArray[1],
  userPicture: StudentArray[1].img,
};
