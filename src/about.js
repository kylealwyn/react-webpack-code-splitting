import React from 'react';
import { Link } from 'react-router';

export default () => (
  <div>
    <h1>About Page.</h1>
    <Link to="/">Home</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/about">About</Link>
  </div>
);
