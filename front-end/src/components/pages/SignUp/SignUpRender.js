import React from 'react';

const SignUpRender = ({ children }) => (
  <div className="container">
    <div className="sign-in-sign-up">
      <h2 className="sign-in-sign-up__title">Sign Up</h2>

      <div className="sign-in-sign-up__subtitle">
        Sign up to Monthly Budget and all other <a href="/">aidandang.com</a>{' '}
        applications.
      </div>

      {children}

      <div className="sign-in-sign-up__terms">
        This site is protected by reCAPTCHA and the Google{' '}
        <a href="/" target="_blank">
          Privacy Policy
        </a>{' '}
        and{' '}
        <a href="/" target="_blank">
          Terms of Service
        </a>{' '}
        apply.
      </div>

      <div className="sign-in-sign-up__bottom"></div>
    </div>
  </div>
);

export default SignUpRender;
