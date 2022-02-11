import React from 'react';
import { Story, Meta } from '@storybook/react';

import { SkillsInputContainer, ISkillsInputContainerProps } from './SkillsInputContainer';
import { SkillsArray } from 'mock/skillsData';
import { ProfileSettingInputLabels, ProfileSettingInputPlaceholders } from 'context';

export default {
  title: 'TMS/Inputs',
  component: SkillsInputContainer,
} as Meta;

const Template: Story<ISkillsInputContainerProps> = (args) => <SkillsInputContainer {...args} />;

export const SkillsInputRequired = Template.bind({});

SkillsInputRequired.args = {
  labelText: ProfileSettingInputLabels.skills,
  placeholderText: ProfileSettingInputPlaceholders.skills,
  isRequired: true,
  isValid: true,
  skillsArray: SkillsArray,
  getSkills: (id, arr) => true,

};
