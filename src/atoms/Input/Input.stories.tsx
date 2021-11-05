import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Input, InputProps } from './Input';

export default {
  title: 'TMS/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args}/>;

export const DefaultInput = Template.bind({});

DefaultInput.args = {
  isActive: false,
  isValid: true,
  placeholderText: 'Введите e-mail',
};

export const ActiveInput = Template.bind({});

ActiveInput.args = {
  isActive: true,
  isValid: true,
  text: 'ivan@teachmeskills.com',
};

export const InvalidInput = Template.bind({});

InvalidInput.args = {
  isActive: false,
  isValid: false,
  text: 'ivan@teachmeskills.com',
};