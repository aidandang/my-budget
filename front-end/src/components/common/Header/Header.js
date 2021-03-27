import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/">Redux Auth</Link>
        <Link to="/sign-up">Sign Up</Link>
        <Link to="/sign-in">Sign In</Link>
      </div>
    );
  }
}

export default Header;
