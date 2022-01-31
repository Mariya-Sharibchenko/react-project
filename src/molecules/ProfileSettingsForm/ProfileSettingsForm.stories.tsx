import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ProfileSettingsForm, IProfileSettingsFormProps } from './ProfileSettingsForm';

export default {
  title: 'TMS/ProfileSettingsForm',
  component: ProfileSettingsForm,
} as Meta;

const Template: Story<IProfileSettingsFormProps> = (arg) => <ProfileSettingsForm {...arg} />;

export const Form = Template.bind({});

Form.args = {
  getValue: value => true,
  getSkills: arr => true,
};
