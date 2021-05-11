import React, { Component } from 'react';

import { connect } from 'react-redux';
import { auth } from '../../../firebase/firebase.utils';

import logo from '../../../assets/logo.svg';

class Navbar extends Component {
  render() {
    return (
      <div className="navigation">
        <div className="navigation__logo-box">
          <a href="/">
            <img src={logo} className="navigation__logo" alt="logo" />
          </a>
        </div>

        <div className="navigation__menu-box">
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
        </div>

        <div className="navigation__auth-box">
          {this.props.currentUser ? (
            <span
              onClick={(e) => {
                e.preventDefault();
                auth.signOut();
              }}
              className="navigation__user"
            >
              <i className="fas fa-user"></i>
            </span>
          ) : (
            <a href="/sign-in">
              <i className="far fa-user"></i>
            </a>
          )}
        </div>

        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />

        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a className="navigation__link" href="/dashboard">
                Dashboard
              </a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="/budgets">
                Budgets
              </a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="/transations">
                Transactions
              </a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="/about">
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps)(Navbar);
