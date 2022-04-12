import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('has App className', () => {
  const { container } = render(<App />, {wrapper: BrowserRouter});
  expect(container.getElementsByClassName('App').length).toBe(1);
});
