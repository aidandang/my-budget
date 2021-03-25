import React from 'react';

import logo from '../assets/logo.svg';
import { Button } from '../components/Button';

export const SignUp = ({ mode }) => (
  <div className="container">
    <div className="sign-in-sign-up">
      <div className="sign-in-sign-up__logo-box">
        <img
          src={logo}
          alt="logo"
          className="sign-in-sign-up__logo-box__logo"
        />
      </div>

      <h2 className="sign-in-sign-up__title">Sign Up</h2>

      <div className="sign-in-sign-up__subtitle">
        Sign up to Monthly Budget and all other <a href="/">aidandang.com</a>{' '}
        applications.
      </div>

      <div className="sign-in-sign-up__separator">
        <span className="sign-in-sign-up__separator--left"></span>
        <span className="sign-in-sign-up__separator--or">x</span>
        <span className="sign-in-sign-up__separator--right"></span>
      </div>

      <div className="sign-in-sign-up__user-id">
        <label htmlFor="sign-in-user-id">Email</label>
        <div className="sign-in-sign-up__input">
          <input
            type="email"
            id="sign-in-user-id"
            name="email"
            className="input input--sign-in-sign-up"
          />
        </div>
      </div>

      <div className="sign-in-sign-up__password">
        <label htmlFor="sign-in-password">Password</label>
        <div className="sign-in-sign-up__input">
          <input
            type="password"
            id="sign-in-password"
            name="password"
            className="input input--sign-in-sign-up"
          />
        </div>
      </div>

      <div className="sign-in-sign-up__password">
        <label htmlFor="sign-in-password">Confirmed Password</label>
        <div className="sign-in-sign-up__input">
          <input
            type="password"
            id="sign-in-confirmed-password"
            name="password"
            className="input input--sign-in-sign-up"
          />
        </div>
      </div>

      <div className="sign-in-sign-up__email">
        <Button
          mode={mode}
          size={'large'}
          otherStyle={'button--sign-in-sign-up'}
        >
          Sign up with Email
        </Button>
      </div>

      <div className="sign-in-sign-up__terms">
        By clicking Sign Up with Email, you agree to our{' '}
        <a href="/" target="_blank">
          Terms
        </a>
        , and have read our{' '}
        <a href="/" target="_blank">
          Global Privacy Statement
        </a>
        .
      </div>

      <div className="sign-in-sign-up__bottom"></div>
    </div>
  </div>
);
