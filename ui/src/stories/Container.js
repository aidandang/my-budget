import React from 'react';

import { Navbar } from './Navbar';
import './container.css';

export const Container = ({ children, user }) => (
  <div className="container">
    <div className="header">
      <Navbar user={user} />
    </div>
    <div className="content">{children}</div>
  </div>
);

export default Container;
