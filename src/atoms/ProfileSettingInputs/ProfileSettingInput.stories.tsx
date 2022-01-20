import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ProfileSettingInput, IProfileSettingInput } from './ProfileSettingInput';

export default {
  title: 'TMS/Inputs',
  component: ProfileSettingInput,
} as Meta;

const Template: Story<IProfileSettingInput> = (args) => <ProfileSettingInput {...args}/>;

export const SettingInputRequired = Template.bind({});

SettingInputRequired.args = {
  isRequired: true,
  isValid: false,
};

export const SettingInputOptional = Template.bind({});

SettingInputOptional.args = {
  isRequired: false,
  isValid: true,
};
