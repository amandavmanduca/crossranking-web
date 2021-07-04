import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "antd/dist/antd.css";
import useApollo from './libs/apollo';
import { ApolloProvider } from '@apollo/client';

import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { parseCookies } from 'nookies';



const cache = new InMemoryCache();


const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const tokenCookie = parseCookies()['@crossranking:token'];
  const token = tokenCookie ? JSON.parse(tokenCookie) : '';
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});


const errorLink = onError(({ graphQLErrors, networkError, response }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      console.log(`[GraphQL Error]: Message: ${message}`);
    });
  }
  if (networkError) {
      console.log(`[Network Error]: ${networkError.message}`);
  } 
});

const link = from([
  authLink.concat(errorLink.concat(
    new HttpLink({uri: process.env.REACT_APP_API_URL})))
])

const client = new ApolloClient({
  cache: cache,
  uri: process.env.REACT_APP_API_URL,
  name: 'react-web-client',
  link: link,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

