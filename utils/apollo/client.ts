import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import fetch from "cross-fetch";

export const client = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: "https://api.thegraph.com/subgraphs/name/kojiadrianojr/sparkswap-v2-subgraph",
  }),
  cache: new InMemoryCache(),
});
