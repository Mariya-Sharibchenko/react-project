import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import App from './App';
import { UserTypes } from 'context';

test('has App className', () => {
  const client = new ApolloClient({
    uri: 'https://graphqlzero.almansi.me/api',
    cache: new InMemoryCache()
  });
  const { container } = render(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App userType={UserTypes.company} />
      </BrowserRouter>
    </ApolloProvider>);
  expect(container.getElementsByClassName('App').length).toBe(1);
});
