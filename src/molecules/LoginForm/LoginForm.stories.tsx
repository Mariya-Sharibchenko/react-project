import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { LoginForm, ILoginFormProps } from './LoginForm';

export default {
  title: 'TMS/LoginForm',
  component: LoginForm,
} as Meta;

const Template: Story<ILoginFormProps> = (args) => <LoginForm {...args} />;

export const LoginIncorrect = Template.bind({});

LoginIncorrect.args = {
  inputValidation: value => false,
  setEmail: value => action('login'),
  setPassword: value => action('password'),
  isDataValid: true,
};

export const LoginCorrect = Template.bind({});

LoginCorrect.args = {
  inputValidation: value => true,
  setEmail: value => action('login'),
  setPassword: value => action('password'),
  isDataValid: false,
  isStayInSystemChecked: true,
};
