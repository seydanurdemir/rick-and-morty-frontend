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
  uri: 'https://rick-and-morty-backend-app.herokuapp.com/',
  cache: new InMemoryCache()
});

const EXAMPLE_QUERY = gql`
  query ExampleQuery {
    characters {
      id
      name
      location {
        name
      }
      image
    }
  }
`;

const PAGE_QUERY = gql`
  query PageQuery($number: Int, $pages: Int) {
    charactersByPage(number: $number, pages: $pages) {
      id
      name
      location {
        name
      }
      image
    }
  }
`;

const FILTER_QUERY = gql`
  query FilterQuery($name: String) {
    charactersByFilter(name: $name) {
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
      {data.characters.map((c) => (
        <div class="col-sm-12 col-md-6 d-flex justify-content-around">
          <CharacterCard key={c.id} {...c} />
        </div>
      ))}
    </div>
  </div>
}

function PageQuery() {
  const { loading, error, data } = useQuery(PAGE_QUERY, {
    variables: {
      number: 1,
      pages: 20
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return <div class="container">
    <div class="row">
      {data.charactersByPage.map((c) => (
        <div class="col-sm-12 col-md-6 d-flex justify-content-around">
          <CharacterCard key={c.id} {...c} />
        </div>
      ))}
    </div>
  </div>
}

function FilterQuery() {
  const { loading, error, data } = useQuery(FILTER_QUERY, {
    variables: {
      name: "Rick"
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  console.log(data);
  return <div class="container">
    <div class="row">
      {data.charactersByFilter.map((c) => (
        <div class="col-sm-12 col-md-6 d-flex justify-content-around">
          <CharacterCard key={c.id} {...c} />
        </div>
      ))}
    </div>
  </div>
}

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <FilterQuery />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
