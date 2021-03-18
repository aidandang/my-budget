import React from 'react';

import logo from '../../../assets/logo.svg';
import google from '../../../assets/google.svg';

const SignInRender = () => {
  return (
    <>
      <div className="container">
        <header className="sign-in-header"></header>
        <div className="sign-in-box">
          <div className="sign-in-box__logo-box">
            <img
              src={logo}
              alt="logo"
              className="sign-in-box__logo-box__logo"
            />
          </div>
          <h2 className="sign-in-box__title">Sign In</h2>
          <div className="sign-in-box__subtitle">
            Sign in with either your Google account or{' '}
            <a href="/">Monthly Budget</a> application account.
          </div>
          <a
            href="/"
            className="btn btn--white btn--sign-in sign-in-box__google"
          >
            <img src={google} alt="gl" className="google-logo" />
            <span>Sign in with Google</span>
          </a>
          <div className="sign-in-box__separator">
            <span className="sign-in-box__separator--left"></span>
            <span className="sign-in-box__separator--or">or</span>
            <span className="sign-in-box__separator--right"></span>
          </div>
          <div className="sign-in-box__user-id">
            <label htmlFor="sign-in-user-id">Email</label>
            <div className="sign-in-box__input">
              <input type="email" className="input input--sign-in" />
            </div>
          </div>
          <div className="sign-in-box__password">
            <label htmlFor="sign-in-password">Password</label>
            <div className="sign-in-box__input">
              <input type="password" className="input input--sign-in" />
            </div>
          </div>
          <a
            href="/"
            className="btn btn--primary btn--sign-in sign-in-box__email"
          >
            <span>Sign in with Email</span>
          </a>
          <div className="sign-in-box__terms">
            By clicking Sign In with Email, you agree to our{' '}
            <a href="/" target="_blank">
              Terms
            </a>
            , and have read our{' '}
            <a href="/" target="_blank">
              Global Privacy Statement
            </a>
            .
          </div>
          <div className="sign-in-box__sign-up">
            <span>
              <a id="ius-link-account-recovery" href="/">
                I forgot my user ID or password
              </a>
            </span>
            <br />
            <span>
              New to Monthly Budget?{' '}
              <a href="http://quickbooks.intuit.com/signup/">Sign up</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInRender;
