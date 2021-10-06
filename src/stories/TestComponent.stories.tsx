import React from 'react';
import { Meta } from '@storybook/react';
import { TestComponent } from '../TestComponent';
import { helloworld } from 'context';

export default {
    title: 'Welcome',
    component: TestComponent,
} as Meta;

export const TestComponentExample = () => (
    <TestComponent>{`${helloworld} from storybook`}</TestComponent>
)

export const TestComponentExampleDefault = () => (
    <TestComponent/>
)
