import React from 'react';
import { Story, Meta } from '@storybook/react';

import { UserMenu, IUserMenuComponentProps } from './UserMenu';
import { UserMenuItems } from 'context';
import { CompaniesArray, StudentArray } from 'mock';

export default {
  title: 'TMS/UserMenu',
  component: UserMenu,
} as Meta;

const Template: Story<IUserMenuComponentProps> = (args) => <UserMenu {...args} />;

export const DropDownStudentMenu = Template.bind({});

DropDownStudentMenu.args = {
  menuFields: UserMenuItems,
  user: StudentArray[0],
  menuIsOpened: true,
};

export const DropDownCompanyMenu = Template.bind({});

DropDownCompanyMenu.args = {
  menuFields: UserMenuItems,
  user: CompaniesArray[3],
  menuIsOpened: true,
};
