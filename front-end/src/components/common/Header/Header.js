import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { auth } from '../../../firebase/firebase.utils';

import logo from '../../../assets/logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div class="navigation">
          <input
            id="navi-toggle"
            type="checkbox"
            className="navigation__checkbox"
          />
          <label htmlFor="navi-toggle" className="navigation__button">
            <i className="fas fa-bars"></i>
          </label>
          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <Link to="/dashboard" className="navigation__link">
                  Dashboard
                </Link>
              </li>
              <li className="navigation__item">
                <Link to="/budgets" className="navigation__link">
                  Budgets
                </Link>
              </li>
              <li className="navigation__item">
                <Link to="/transations" className="navigation__link">
                  Transactions
                </Link>
              </li>
            </ul>
          </nav>
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
