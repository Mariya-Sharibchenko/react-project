import React from 'react';
import { Story, Meta } from '@storybook/react';

import { UserImage, IUserImageProps } from './UserImage';
import { CompaniesArray, StudentArray } from 'mock';

export default {
  title: 'TMS/UserImage',
  component: UserImage,
} as Meta;

const Template: Story<IUserImageProps> = (args) => <UserImage {...args} />;

export const StudentImg = Template.bind({});

StudentImg.args = {
  user: StudentArray[1]
};

export const StudentNoImg = Template.bind({});

StudentNoImg.args = {
  user: StudentArray[0]
};

export const Company = Template.bind({});

Company.args = {
  user: CompaniesArray[1]
};
