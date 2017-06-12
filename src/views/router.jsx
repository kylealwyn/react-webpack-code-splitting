import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import App from './app';
import * as Async from './async-views';

export default () => (
  <HashRouter>
    <App>
      <Route exact path="/" component={Async.Home} />
      <Route path="/about" component={Async.About} />
      <Route path="/projects" component={Async.Projects} />
    </App>
  </HashRouter>
);
