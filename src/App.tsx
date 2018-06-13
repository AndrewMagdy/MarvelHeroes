import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';

import './index.html';
import './App.scss';

import HeroesPagination from './HeroesPagination';
import Hero from './Hero';

const NoMatch: React.SFC<RouteComponentProps<{}>> = ({ location }) => (
  <div>
    <h1>Whoops</h1>
    <p>
      Sorry but <em>{location.pathname}</em> didn't match any pages
    </p>
  </div>
);

const Layout: React.SFC = props => (
  <div>
    <div className="container-fluid">{props.children}</div>
  </div>
);

const App = () => (
  <HashRouter>
    <Layout>
      <Switch>
        <Route exact path="/:page?" component={HeroesPagination} />
        <Route path="/heroes/:id" component={Hero} />

        <Route component={NoMatch} />
      </Switch>
    </Layout>
  </HashRouter>
);

ReactDOM.render(<App />, document.getElementById('app'));
