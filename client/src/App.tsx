import { ApolloClient, InMemoryCache } from '@apollo/client';
import { FC } from 'react';
import { ApolloProvider } from '@apollo/client';
import { FirstPage } from './pages/FirstPage';

interface AppProps {}

const App: FC<AppProps> = () => {
  const client = new ApolloClient({
    uri: 'http://localhost:5001/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <FirstPage />
    </ApolloProvider>
  );
};

export default App;
