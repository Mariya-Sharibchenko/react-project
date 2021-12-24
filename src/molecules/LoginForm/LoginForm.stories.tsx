import React from 'react';
import { Story, Meta } from '@storybook/react';

import { LoginForm, ILoginFormProps } from './LoginForm';

export default {
  title: 'TMS/LoginForm',
  component: LoginForm,
} as Meta;

const Template: Story<ILoginFormProps> = (args) => <LoginForm {...args}/>;

export const LoginIncorrect = Template.bind({});

LoginIncorrect.args = {
  validation: value => false
};

export const LoginCorrect = Template.bind({});

LoginCorrect.args = {
  validation: value => true,
  isStayInSystemChecked: true,
};
