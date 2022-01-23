import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import CharacterCard from './components/CharacterCard';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

const EXAMPLE_QUERY = gql`
  query ExampleQuery {
    character {
      id
      name
      location {
        name
      }
      image
    }
  }
`;

// client
//   .query({
//     query: EXAMPLE_QUERY
//   })
//   .then(result => console.log(result));

function ExampleQuery() {
  const { loading, error, data } = useQuery(EXAMPLE_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return <div class="container">
    <div class="row">
      {data.character.map((c) => (
        <div class="col-sm-12 col-md-6">
          <CharacterCard key={c.id} {...c} />
        </div>
      ))}
    </div>
  </div>
}

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ExampleQuery />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
