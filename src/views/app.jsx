import React from 'react';
import Navbar from '@components/navbar';

export default ({ children }) => (
  <div>
    <Navbar />
    {children}
  </div>
);
