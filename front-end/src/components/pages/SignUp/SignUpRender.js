import React from 'react';

const SignUpRender = ({ children }) => (
  <div className="container">
    <div className="sign-in-sign-up">
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

      {children}

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

export default SignUpRender;
