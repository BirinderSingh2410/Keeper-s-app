import React from "react";
import Login from "./components/Login/Login";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import { useSelector } from "react-redux";
import { onError } from "@apollo/client/link/error";
import MainComponent from "./components/MainComponent/MainComponent";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  //if error
  if (graphqlErrors) {
    console.log("error:");
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://warm-cat-45.hasura.app/v1/graphql",
  }), //function link from where data is comming
});

const App = () => {
  const login = useSelector((state) => state.notes.login);

  return (
    <ApolloProvider client={client}>
      {login ? <MainComponent /> : <Login />}
    </ApolloProvider>
  );
};

export default App;
