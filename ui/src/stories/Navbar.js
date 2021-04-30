import React from 'react';

import './Navbar.css';
import logo from './assets/logo.svg';

export const Navbar = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header className="header">
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
          alt="menu"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <i className="fas fa-bars"></i>
        </a>
      </div>
    </nav>
  </header>
);
