import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Input, IInputComponentProps } from './Input';

export default {
  title: 'TMS/Inputs',
  component: Input,
} as Meta;

const Template: Story<IInputComponentProps> = (args) => <Input {...args}/>;

export const DefaultInput = Template.bind({});

DefaultInput.args = {
  isValid: true,
  type: 'email',
  placeholderText: 'Введите e-mail',
  labelText: 'E-mail'
};

export const InvalidInput = Template.bind({});

InvalidInput.args = {
  isValid: false,
  type: 'email',
  placeholderText: 'Введите e-mail',
  inputValue: 'ivan@teachmeskills.com',
  labelText: 'E-mail'
};