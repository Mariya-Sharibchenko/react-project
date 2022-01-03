import React from 'react';
import { Story, Meta } from '@storybook/react';

import { BookmarkButton, IBookmarkButtonProps } from './BookmarkButton';

export default {
  title: 'TMS/Buttons',
  component: BookmarkButton,
} as Meta;

const Template: Story<IBookmarkButtonProps> = (args) => <BookmarkButton {...args}/>;

export const DefaultBookmarkButton = Template.bind({});

DefaultBookmarkButton.args = {
  isMarked: false
};

export const MarkedBookmarkButton = Template.bind({});

MarkedBookmarkButton.args = {
  isMarked: true
};
