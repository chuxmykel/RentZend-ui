import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AgentsApplication from './containers/AgentsApplication';
import AgentsView from './containers/AgentsView';
import Header from './containers/Header';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={AgentsView} />
            <Route exact path="/apply" component={AgentsApplication} />
          </Switch>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
