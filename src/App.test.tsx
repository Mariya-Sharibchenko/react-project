import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import App from './App';
import { UserTypes } from 'context';

test('has App className', () => {
  const { container } = render(<App userType={UserTypes.company} />, {wrapper: BrowserRouter});
  expect(container.getElementsByClassName('App').length).toBe(1);
});
