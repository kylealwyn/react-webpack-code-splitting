import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <nav className="app-nav">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/about">About</Link>
    </nav>
  </header>
);

export default Navbar;
