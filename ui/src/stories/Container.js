import React from 'react';

import { Navbar } from './Navbar';
import { Footer } from './Footer';
import './container.css';

export const Container = ({ children, user }) => (
  <div className="container">
    <div className="header">
      <Navbar user={user} />
    </div>
    <div className="content">{children}</div>
    <Footer />
  </div>
);

export default Container;
