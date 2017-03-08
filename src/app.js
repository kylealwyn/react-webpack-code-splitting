import React from 'react';
import { render } from 'react-dom';
import Router from './routes';
import './app.css';

const root = document.getElementById('root')

render(<Router />, root)

if (module.hot) {
  module.hot.accept('./routes', () => {
    const NewRouter = require('./routes').default;;

    render(<NewRouter />, root)
  });
}
