import React from 'react';
import { Story, Meta } from '@storybook/react';

import { StudentImageInCircle } from './StudentImageInCircle';
import { IStudentImageProps } from './StudentImage';

import { StudentArray } from 'mock';

export default {
  title: 'TMS/StudentImages',
  component: StudentImageInCircle,
} as Meta;

const Template: Story<IStudentImageProps> = (args) => <StudentImageInCircle {...args}/>;

export const NoImageInCircle = Template.bind({});

NoImageInCircle.args = {
  ...StudentArray[2],
  userPicture: StudentArray[2].img,
};

export const ImageInCircle = Template.bind({});

ImageInCircle.args = {
  ...StudentArray[1],
  userPicture: StudentArray[1].img,
};
