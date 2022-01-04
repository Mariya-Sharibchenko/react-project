import React from 'react';
import { Story, Meta } from '@storybook/react';

import { InputTypes } from 'context';
import { Input, IInputComponentProps } from './Input';

export default {
  title: 'TMS/Inputs',
  component: Input,
} as Meta;

const Template: Story<IInputComponentProps> = (args) => <Input {...args}/>;

export const DefaultInput = Template.bind({});

DefaultInput.args = {
  isValid: true,
  type: InputTypes.email,
  placeholderText: 'Введите e-mail',
  labelText: 'E-mail'
};

export const InvalidInput = Template.bind({});

InvalidInput.args = {
  isValid: false,
  type: InputTypes.email,
  placeholderText: 'Введите e-mail',
  inputValue: 'ivan@teachmeskills.com',
  labelText: 'E-mail'
};
