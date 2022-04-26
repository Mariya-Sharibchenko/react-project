import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ChangePasswordForm, IChangePasswordFormProps } from './ChangePasswordForm';

export default {
  title: 'TMS/ProfileSettingsForm',
  component: ChangePasswordForm,
} as Meta;

const Template: Story<IChangePasswordFormProps> = (arg) => <ChangePasswordForm {...arg} />;

export const PasswordForm = Template.bind({});

PasswordForm.args = {
  isValid: {
    currentPassword: true,
    newPassword: true,
  },
  getValue: (id, value) => true,
};
