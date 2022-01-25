import React from 'react';
import { Story, Meta } from '@storybook/react';

import { EducationInputContainer, IEducationInputContainerProps } from './EducationInputContainer';
import { EducationSettings } from 'mock/profileSettingData';

export default {
  title: 'TMS/Inputs',
  component: EducationInputContainer,
} as Meta;

const Template: Story<IEducationInputContainerProps> = (args) => <EducationInputContainer {...args}/>;

export const EducationInputRequired = Template.bind({});

EducationInputRequired.args = {
  isRequired: true,
  isValid: true,
  getDateValue: (value) => true,
  optionsArray: EducationSettings,
};
