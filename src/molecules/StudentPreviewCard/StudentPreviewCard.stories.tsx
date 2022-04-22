import React from 'react';
import { Story, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { StudentPreviewCard, IStudentPreviewCard } from './StudentPreviewCard';

import { StudentArray } from 'mock';

export default {
  title: 'TMS/StudentPreviewCard',
  component: StudentPreviewCard,
  decorators : [(Story) => (<MemoryRouter><Story /></MemoryRouter>)]
} as Meta;

const Template: Story<IStudentPreviewCard> = (args) => <StudentPreviewCard {...args} />;

export const StudentCard = Template.bind({});

StudentCard.args = {
  student: StudentArray[0],
  isCardActive: false,
};

export const StudentCardActive = Template.bind({});

StudentCardActive.args = {
  student: StudentArray[1],
  isCardActive: true,
};
