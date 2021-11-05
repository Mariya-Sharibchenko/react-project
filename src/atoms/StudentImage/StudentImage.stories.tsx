import React from 'react';
import { Story, Meta } from '@storybook/react';

import { StudentImage, IStudentImageProps } from './StudentImage';
import { StudentArray } from 'mock';

export default {
  title: 'TMS/StudentImages',
  component: StudentImage,
} as Meta;

const Template: Story<IStudentImageProps> = (args) => <StudentImage {...args}/>;

export const NoImageOnCard = Template.bind({});

NoImageOnCard.args = {
  ...StudentArray[0],
  isInCircle: false
};

export const ImageOnCard = Template.bind({});

ImageOnCard.args = {
  ...StudentArray[1],
  userPicture: StudentArray[1].img,
  isInCircle: false
};

export const NoImageInCircle = Template.bind({});

NoImageInCircle.args = {
  ...StudentArray[2],
  isInCircle: true
};

export const ImageInCircle = Template.bind({});

ImageInCircle.args = {
  ...StudentArray[1],
  userPicture: StudentArray[1].img,
  isInCircle: true
};
