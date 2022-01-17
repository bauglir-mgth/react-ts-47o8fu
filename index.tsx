import React, { Component } from 'react';
import { render } from 'react-dom';
import 'graphiql/graphiql.css';
import { GraphiQL } from 'graphiql';
import { createGraphiQLFetcher } from '@graphiql/toolkit';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}
const URL = 'https://swapi-graphql.netlify.com/.netlify/functions/index';

const fetcher = createGraphiQLFetcher({
  url: URL,
  headers: { 'Content-Type': 'application/json' },
});
export class App extends Component<AppProps, AppState> {
  constructor(props: AppProps|Readonly<AppProps>) {
    super(props);
    this.state = {
      name: 'React',
    };
  }
 render() {
    return <GraphiQL fetcher={fetcher} />;
  }
}

render(<App />, document.getElementById('root'));
