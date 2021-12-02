import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ISearchInputProps, SearchInput } from './SearchInput';

export default {
  title: 'TMS/Search',
  component: SearchInput,
} as Meta;

const Template: Story<ISearchInputProps> = (args) => <SearchInput {...args}/>;

export const InputSearch = Template.bind({});

InputSearch.args = {
  placeholderText: 'search'
};
