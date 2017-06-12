import React from 'react';
import { render } from 'react-dom';
import Router from '@views/router';
import '@styles/app.css';

const root = document.getElementById('root');

render(<Router />, root)

if (module.hot) {
  module.hot.accept('./views/router', () => {
    const NextRouter = require('./views/router').default;

    render(<NextRouter />, root);
  });
}
