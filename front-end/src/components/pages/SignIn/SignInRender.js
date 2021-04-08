import React from 'react';
import { Link } from 'react-router-dom';

const SignInRender = ({ children }) => {
  return (
    <div className="sign-in-sign-up-container">
      <div className="sign-in-sign-up">
        <h2 className="sign-in-sign-up__title">Sign In</h2>

        <div className="sign-in-sign-up__subtitle">
          Sign in with either your Google account or{' '}
          <a href="/">Monthly Budget</a> application account.
        </div>

        {children}

        <div className="sign-in-sign-up__terms">
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

        <hr className="separator" />

        <div className="sign-in-sign-up__sign-up">
          <span>
            <a id="ius-link-account-recovery" href="/">
              Forgot your email or password?
            </a>
          </span>
          <br />
          <span>
            New to Monthly Budget? <Link to="/sign-up">Sign up</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignInRender;
