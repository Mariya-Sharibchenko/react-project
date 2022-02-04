import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ProfileSettingsForm, IProfileSettingsFormProps } from './ProfileSettingsForm';
import { EducationSettings, EnglishSettings, SkillsArray } from 'mock';

export default {
  title: 'TMS/ProfileSettingsForm',
  component: ProfileSettingsForm,
} as Meta;

const Template: Story<IProfileSettingsFormProps> = (arg) => <ProfileSettingsForm {...arg} />;

export const Form = Template.bind({});

Form.args = {
  educationLevelsArray: EducationSettings,
  englishLevelsArray: EnglishSettings,
  skillsArray: SkillsArray,
  isValid: true,
  getValue: value => true,
  getSkills: arr => true,
};
