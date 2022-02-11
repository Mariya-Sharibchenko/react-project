import React from 'react';
import { Story, Meta } from '@storybook/react';

import { StudentImageInCircle } from './StudentImageInCircle';
import { IStudentImageProps } from './interfaces';

import { StudentArray } from 'mock';

export default {
  title: 'TMS/StudentImages',
  component: StudentImageInCircle,
} as Meta;

const Template: Story<IStudentImageProps> = (args) => <StudentImageInCircle {...args} />;

export const NoImageInCircle = Template.bind({});

NoImageInCircle.args = {
  ...StudentArray[0],
  userPicture: StudentArray[0].img,
};

export const ImageInCircle = Template.bind({});

ImageInCircle.args = {
  ...StudentArray[1],
  userPicture: StudentArray[1].img,
};
