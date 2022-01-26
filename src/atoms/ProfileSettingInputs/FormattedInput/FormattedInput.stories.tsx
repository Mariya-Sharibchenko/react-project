import React from 'react';
import { Story, Meta } from '@storybook/react';

import { FormattedInputContainer, IFormattedInputContainerProps } from './FormatedInputContainer';
import { ProfileSettingInputLabels, ProfileSettingInputPlaceholders } from 'context';
import { formatDate } from '../utils/formatDate';
import { formatPhone } from '../utils/formatPhone';

export default {
  title: 'TMS/Inputs',
  component: FormattedInputContainer,
} as Meta;

const Template: Story<IFormattedInputContainerProps> = (args) => <FormattedInputContainer {...args}/>;

export const DateInputRequired = Template.bind({});

DateInputRequired.args = {
  labelText: ProfileSettingInputLabels.birthDate,
  placeholderText: ProfileSettingInputPlaceholders.birthDate,
  formatValueFunction: formatDate,
  isRequired: true,
  isValid: true,
  getValue: (value) => true
};

export const PhoneInputRequired = Template.bind({});

PhoneInputRequired.args = {
  labelText: ProfileSettingInputLabels.phone,
  placeholderText: ProfileSettingInputPlaceholders.phone,
  formatValueFunction: formatPhone,
  isRequired: true,
  isValid: true,
  getValue: (value) => true
};
