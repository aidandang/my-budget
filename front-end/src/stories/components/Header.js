import React from 'react';
import logo from '../assets/logo.svg';

export const Header = () => (
  <div className="header">
    <div className="header__logo-box">
      <img src={logo} alt="logo" className="header__logo-box__logo" />
    </div>
  </div>
);
