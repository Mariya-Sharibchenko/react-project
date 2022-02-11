import React from 'react';
import { Story, Meta } from '@storybook/react';

import { FilteredInputContainer, IFilteredInputContainerProps } from './FilteredInputContainer';
import { EducationSettings } from 'mock/profileSettingData';
import { ProfileSettingInputLabels, ProfileSettingInputPlaceholders } from 'context';

export default {
  title: 'TMS/Inputs',
  component: FilteredInputContainer,
} as Meta;

const Template: Story<IFilteredInputContainerProps> = (args) => <FilteredInputContainer {...args} />;

export const EducationInputRequired = Template.bind({});

EducationInputRequired.args = {
  isRequired: true,
  isValid: true,
  getValue: (id, value) => true,
  optionsArray: EducationSettings,
  labelText: ProfileSettingInputLabels.education,
  placeholderText: ProfileSettingInputPlaceholders.education,
};
