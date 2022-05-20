import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-ap-northeast-1.graphcms.com/v2/cl3b770ez1kxg01xmgqigfjhj/master',
  cache: new InMemoryCache(),
});

export default client;
