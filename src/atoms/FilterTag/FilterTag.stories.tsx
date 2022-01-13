import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { FilterTag, IFilterTagProps } from './FilterTag';

export default {
  title: 'TMS/Tags',
  component: FilterTag,
} as Meta;

const Template: Story<IFilterTagProps> = (args) => <FilterTag {...args}/>;

export const FilterTagExample = Template.bind({});

FilterTagExample.args = {
  text: 'SearchButtonText',
  onClick: action('delete Tag'),
};
