import React from 'react';
import { Story, Meta } from '@storybook/react';

import { SkillsInputContainer, ISkillsInputContainerProps } from './SkillsInputContainer';

export default {
  title: 'TMS/Inputs',
  component: SkillsInputContainer,
} as Meta;

const Template: Story<ISkillsInputContainerProps> = (args) => <SkillsInputContainer {...args}/>;

export const SkillsInputRequired = Template.bind({});

SkillsInputRequired.args = {
  labelText: 'Навыки',
  placeholderText: 'Введите навык',
  isRequired: true,
  isValid: true,
  getSkills: (arr) => true,

}
