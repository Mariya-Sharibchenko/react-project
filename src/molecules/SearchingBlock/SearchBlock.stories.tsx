import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { SearchBlock, ISearchBlockProps } from './SearchBlock';
import { FiltersArray } from 'mock';

export default {
  title: 'TMS/Search',
  component: SearchBlock,
} as Meta;

const Template: Story<ISearchBlockProps> = (args) => <SearchBlock {...args} />;

export const SearchClosed = Template.bind({});

SearchClosed.args = {
  isFiltersBlockOpened: false,
  filtersArray: FiltersArray,
  getFiltersOptions: action('filter'),
};

export const SearchOpened = Template.bind({});

SearchOpened.args = {
  isFiltersBlockOpened: true,
  filtersArray: FiltersArray,
  getFiltersOptions: action('filter'),
};
