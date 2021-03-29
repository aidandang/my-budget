import React, { Component } from 'react';

import { connect } from 'react-redux';
import { auth } from '../../../firebase/firebase.utils';

import logo from '../../../assets/logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="navigation">
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
                <a href="/dashboard" className="navigation__link">
                  Dashboard
                </a>
              </li>
              <li className="navigation__item">
                <a href="/budgets" className="navigation__link">
                  Budgets
                </a>
              </li>
              <li className="navigation__item">
                <a href="/transations" className="navigation__link">
                  Transactions
                </a>
              </li>
              <li className="navigation__item">
                <a href="/about" className="navigation__link">
                  About
                </a>
              </li>
              <li className="navigation__item">
                <a href="https://aidandang.com" className="navigation__link">
                  Portfolio
                </a>
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
