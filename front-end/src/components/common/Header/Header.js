import React, { Component } from 'react';

import { connect } from 'react-redux';
import { auth } from '../../../firebase/firebase.utils';

import logo from '../../../assets/logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <a href="/" className="header__bars-box" alt="menu">
          <i className="fas fa-bars"></i>
        </a>

        <a href="/" className="header__logo-box">
          <img src={logo} className="header__logo-box__logo" alt="logo" />
        </a>

        <nav className="header__nav-box">
          <ul>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/budgets">Budgets</a>
            </li>
            <li>
              <a href="/transations">Transactions</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
        <div className="header__auth-box">
          {this.props.currentUser ? (
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                auth.signOut();
              }}
            >
              <i className="fas fa-sign-out-alt"></i>
            </a>
          ) : (
            <a href="/sign-in">
              <i className="fas fa-sign-in-alt"></i>
            </a>
          )}
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps)(Header);
