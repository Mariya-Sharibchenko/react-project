import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ProfileSettingsForm, IProfileSettingsFormProps } from './ProfileSettingsForm';
import { SkillsArray } from 'context';
import { EducationSettings, EnglishSettings } from 'context';

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
  isValid: {
    name: true,
    birthDate: true,
    city: true,
    phone: true,
    email: true,
    english: false,
    education: true,
    additionalEducation: true,
    skills: true,
    about: true,
    facebook: true,
    instagram: true,
    linkedin: true,
    vk: true,
  },
  getValue: (id, value) => true,
  getSkills: (id, arr) => true,
};
