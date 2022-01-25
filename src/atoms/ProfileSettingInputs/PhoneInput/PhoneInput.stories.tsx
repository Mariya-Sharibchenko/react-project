import React from 'react';
import { Story, Meta } from '@storybook/react';

import { PhoneInputContainer, IPhoneInputContainerProps } from './PhoneInputContainer';

export default {
  title: 'TMS/Inputs',
  component: PhoneInputContainer,
} as Meta;

const Template: Story<IPhoneInputContainerProps> = (args) => <PhoneInputContainer {...args}/>;

export const PhoneInputRequired = Template.bind({});

PhoneInputRequired.args = {
  isRequired: true,
  isValid: true,
  getDateValue: (value) => true
};
