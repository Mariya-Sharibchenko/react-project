import React from 'react';
import { Story, Meta } from '@storybook/react';

import { SearchBlock, ISearchBlockProps } from './SearchBlock';

export default {
  title: 'TMS/Search',
  component: SearchBlock,
} as Meta;

const Template: Story<ISearchBlockProps> = (args) => <SearchBlock {...args}/>;

export const SearchClosed = Template.bind({});

SearchClosed.args = {
  isFiltersBlockOpened: false,
};

export const SearchOpened = Template.bind({});

SearchOpened.args = {
  isFiltersBlockOpened: true,
};
