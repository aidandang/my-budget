import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { auth } from '../../../firebase/firebase.utils';

import logo from '../../../assets/logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="dropdown">
          <button className="dropbtn dropbtn--header">
            <i className="fas fa-bars"></i>
          </button>
          <div className="dropdown-content">
            <Link to="/dashboard" className="dropdown-content--first">
              Dashboard
            </Link>
            <Link to="/budgets">Budgets</Link>
            <Link to="/transactions" className="dropdown-content--last">
              Transactions
            </Link>
          </div>
        </div>
        <div className="header__logo-box">
          <a href="/" alt="home">
            <img src={logo} className="header__logo-box__logo" alt="logo" />
          </a>
        </div>
        <div className="header__auth-box">
          {this.props.currentUser ? (
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                auth.signOut();
              }}
            >
              <i className="fas fa-sign-out-alt"></i>
            </Link>
          ) : (
            <Link to="/sign-in">
              <i className="fas fa-sign-in-alt"></i>
            </Link>
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
