import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ChangePasswordForm, IChangePasswordFormProps } from './ChangePasswordForm';
import { ProfileSettingInputs } from 'context';

export default {
  title: 'TMS/ProfileSettingsForm',
  component: ChangePasswordForm,
} as Meta;

const Template: Story<IChangePasswordFormProps> = (arg) => <ChangePasswordForm {...arg} />;

export const PasswordForm = Template.bind({});

PasswordForm.args = {
  isValid: {
    [ProfileSettingInputs.currentPassword]: true,
    [ProfileSettingInputs.newPassword]: true,
  },
  getValue: (id, value) => true,
};
