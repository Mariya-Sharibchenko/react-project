import React from 'react';
import { helloworld } from 'context';
import styled from 'styled-components';

interface IProps {
    children?: string;
}

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

export const TestComponent = ({ children }: IProps) => {
  return (
    <>
      <div>{children ? children : helloworld}</div>
      <Button>Styled Button</Button>
    </>
  )
}
