import { ApolloProvider } from '@apollo/client';
import { Client } from './apollo/Client';
//import ExampleQuery from './apollo/ExampleQuery';
import PageQuery from './apollo/PageQuery';
//import FilterQuery from './apollo/FilterQuery';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <ApolloProvider client={Client}>
        <Header />
        <PageQuery {...{ number: 1, pages: 20 }} />
      </ApolloProvider>
    </div>
  );
}

export default App;
