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
  
  client
    .query({
      query: gql`
        query GetTimestamp {
          heartBeat
        }
      `,
    })
    .then((result) => console.log(result));