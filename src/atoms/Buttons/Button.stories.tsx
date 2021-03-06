import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button, IButtonProps } from './Button';

import { SearchButtonText } from 'context';

export default {
  title: 'TMS/Buttons',
  component: Button,
} as Meta;

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const SearchButton = Template.bind({});

SearchButton.args = {
  text: SearchButtonText,
  onClick: action('search'),
};

export const TestButton = Template.bind({});

TestButton.args = {
  ...SearchButton.args,
  text: 'Test Button',
  btnColor: '#000000'
};
