import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import App from './app';

const curryLoader = cb => module => cb(null, module.default || module);

export default () => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute getComponent={(nextState, cb) => {
        import('./home').then(curryLoader(cb))
      }} />

      <Route path='/projects' getComponent={(nextState, cb) => {
        import('./projects').then(curryLoader(cb))
      }} />

      <Route path='/about' getComponent={(nextState, cb) => {
        import('./about').then(curryLoader(cb))
      }} />
    </Route>
  </Router>
);
