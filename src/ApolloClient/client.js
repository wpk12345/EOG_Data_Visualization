/* eslint-disable */
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    gql,
  } from '@apollo/client';


  export const client = new ApolloClient({
    uri: 'https://react.eogresources.com/graphql',
    cache: new InMemoryCache(),
  });
  
