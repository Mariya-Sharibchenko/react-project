import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TextInputContainer, ITextInputContainerProps } from './TextInputContainer';
import { ProfileSettingInputLabels, ProfileSettingInputPlaceholders } from 'context';

export default {
  title: 'TMS/Inputs',
  component: TextInputContainer,
} as Meta;

const Template: Story<ITextInputContainerProps> = (args) => <TextInputContainer {...args} />;

export const TextInputRequired = Template.bind({});

TextInputRequired.args = {
  labelText: ProfileSettingInputLabels.name,
  placeholderText: ProfileSettingInputPlaceholders.name,
  isRequired: true,
  isValid: true,
  getValue: (id, value) => true
};
