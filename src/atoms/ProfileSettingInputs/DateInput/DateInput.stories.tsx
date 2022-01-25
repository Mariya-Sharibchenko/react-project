import React from 'react';
import { Story, Meta } from '@storybook/react';

import { DateInputContainer, IDateInputContainerProps } from './DateInputContainer';

export default {
  title: 'TMS/Inputs',
  component: DateInputContainer,
} as Meta;

const Template: Story<IDateInputContainerProps> = (args) => <DateInputContainer {...args}/>;

export const DateInputRequired = Template.bind({});

DateInputRequired.args = {
  isRequired: true,
  isValid: true,
  getDateValue: (value) => true
};
