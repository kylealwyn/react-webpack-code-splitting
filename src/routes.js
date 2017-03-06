import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

const loadRoute = cb => module => cb(null, module.default);

export default () => (
  <Router history={hashHistory}>
    <Route path='/' getComponent={(nextState, cb) => {
      require(['./home'], loadRoute(cb))
    }} />

    <Route path='/projects' getComponent={(nextState, cb) => {
      require(['./projects', './projects.css'], loadRoute(cb))
    }} />

    <Route path='/about' getComponent={(nextState, cb) => {
      require(['./about'], loadRoute(cb))
    }} />
  </Router>
)
