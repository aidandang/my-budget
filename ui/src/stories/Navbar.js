import React from 'react';

import './Navbar.css';
import logo from './assets/logo.svg';

export const Navbar = ({ user, onLogin, onLogout, onCreateAccount }) => {
  return (
    <>
      <div className="navigation">
        <div className="navigation__logo-box">
          <a href="/">
            <img src={logo} className="navigation__logo" alt="logo" />
          </a>
        </div>
        <div className="navigation__auth-box">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <i className="fas fa-user"></i>
          </a>
        </div>
        <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
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

      {/* <header className="header">
        <div className="header__logo">
          <a href="/">
            <img src={logo} className="header__logo__img" alt="logo" />
          </a>
        </div>
        <nav className="header__nav">
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
          <div className="header__nav__auth">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <i className="fas fa-user"></i>
            </a>
          </div>
          <div className="header__nav__bars">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <i className="fas fa-bars"></i>
            </a>
          </div>
        </nav>
      </header> */}
    </>
  );
};
