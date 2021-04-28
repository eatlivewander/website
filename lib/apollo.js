import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://wndr.click/graphql',
    cache: new InMemoryCache(),
});
