import React from 'react';
import { helloworld } from 'context';

interface IProps {
    children?: string;
}

export const TestComponent = ({ children }: IProps) => <div>{children ? children : helloworld}</div>
