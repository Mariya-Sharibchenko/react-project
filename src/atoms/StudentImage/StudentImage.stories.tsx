import React from 'react';
import { Story, Meta } from '@storybook/react';

import { StudentImage, IStudentImageProps } from './StudentImage';
import { StudentArray } from 'context';

export default {
  title: 'TMS/StudentImages',
  component: StudentImage,
} as Meta;

const Template: Story<IStudentImageProps> = (args) => <StudentImage {...args}/>;

export const FirstImageOnCard = Template.bind({});

FirstImageOnCard.args = {
  ...StudentArray[0],
  isInCircle: false
};

export const SecondImageOnCard = Template.bind({});

SecondImageOnCard.args = {
  ...StudentArray[1],
  userPicture: StudentArray[1].img,
  isInCircle: false
};

export const FirstImageInCircle = Template.bind({});

FirstImageInCircle.args = {
  ...StudentArray[2],
  isInCircle: true
};

export const SecondImageInCircle = Template.bind({});

SecondImageInCircle.args = {
  ...StudentArray[1],
  userPicture: StudentArray[1].img,
  isInCircle: true
};