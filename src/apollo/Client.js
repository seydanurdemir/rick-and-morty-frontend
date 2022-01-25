import { ApolloClient, InMemoryCache } from "@apollo/client";

export const Client = new ApolloClient({
    uri: 'https://rick-and-morty-backend-app.herokuapp.com/',
    cache: new InMemoryCache()
});