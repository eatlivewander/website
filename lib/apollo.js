import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'http://54.92.146.119/graphql',
    cache: new InMemoryCache(),
});
