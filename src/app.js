import React from 'react';
import { render } from 'react-dom';
import Router from './routes';
import './app.css';

render(<Router />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./routes', () => {
    const NewRouter = require('./routes').default;;

    render(<NewRouter />, document.getElementById('root'))
  });
}

// setTimeout( () => {
//   require(['./numberlist.hbs'], template => {
//     document.getElementById("app-container").innerHTML = template({numbers});
//   })
// }, 4000);
//
// setTimeout( () => {
//     require(['./second'], (t) => {})
// }, 3000);
//
// setTimeout( () => {
//   require(['./second.css'], (t) => {})
// }, 5000);
