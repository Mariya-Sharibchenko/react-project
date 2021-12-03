import React from 'react';
import { Story, Meta } from '@storybook/react';

import { SearchBlock } from './SearchBlock';

export default {
  title: 'TMS/Search',
  component: SearchBlock,
} as Meta;

const Template: Story = (args) => <SearchBlock {...args}/>;

export const Search = Template.bind({});

Search.args = {
};