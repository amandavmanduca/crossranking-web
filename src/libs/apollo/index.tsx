import {
    ApolloClient,
    ApolloLink,
    HttpLink,
    InMemoryCache,
    from,
    concat,
    NormalizedCacheObject,
  } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const cache = new InMemoryCache();
import { setContext } from '@apollo/client/link/context';
import { parseCookies } from 'nookies';



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
      client.resetStore();
      graphQLErrors.map(({ message }) => {
        console.log(`[GraphQL Error]: Message: ${message}`);
      });
    }
    if (networkError) {
        console.log(`[Network Error]: ${networkError.message}`);
    } 
  });

  const httpLink = new HttpLink({
    uri: process.env.REACT_APP_API_URL,
    credentials: 'include'
  })


  // const link = authLink.concat(httpLink)



const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  // uri: process.env.REACT_APP_API_URL,
  // credentials: 'include',
  // Provide some optional constructor fields
  name: 'react-web-client',
  link: authLink.concat(httpLink),
  // link: link,
//   version: '1.3',
//   queryDeduplication: false,
//   defaultOptions: {
//     watchQuery: {
//       fetchPolicy: 'cache-and-network',
//     },
//   },
});

export default function useApollo() {
    return(client);
}