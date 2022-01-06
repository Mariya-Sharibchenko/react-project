import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { DeleteButton, IDeleteButtonProps } from './DeleteButton';

export default {
  title: 'TMS/Buttons',
  component: DeleteButton,
} as Meta;

const Template: Story<IDeleteButtonProps> = (args) => <DeleteButton {...args}/>;

export const Delete = Template.bind({});

Delete.args = {
  onClick: action('delete'),
};
