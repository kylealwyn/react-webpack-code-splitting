import React from 'react';
import { render } from 'react-dom';
import Router from '@views';
import '@styles/app.css';

const root = document.getElementById('root')

render(<Router />, root)

if (module.hot) {
  module.hot.accept('./views/index', () => {
    const NextRouter = require('./views/index').default;

    render(<NextRouter />, root)
  });
}
