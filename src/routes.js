import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

const curryLoader = cb => module => cb(null, module.default || module);

export default () => (
  <Router history={hashHistory}>
    <Route path='/' getComponent={(nextState, cb) => {
      import('./home').then(curryLoader(cb))
    }} />

    <Route path='/projects' getComponent={(nextState, cb) => {
      import('./projects').then(curryLoader(cb))
    }} />

    <Route path='/about' getComponent={(nextState, cb) => {
      import('./about').then(curryLoader(cb))
    }} />
  </Router>
)
