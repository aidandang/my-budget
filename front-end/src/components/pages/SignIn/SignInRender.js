import React from 'react';

const SignInRender = ({ children }) => {
  return (
    <div className="signin">
      <h2 className="signin__title">Sign in</h2>

      <div className="signin__subtitle">
        Sign in with either your Google account or <a href="/">My Budget</a>{' '}
        application account.
      </div>

      {children}

      <div className="signin__signup">
        <span>
          <a id="ius-link-account-recovery" href="/">
            Forgot your email or password?
          </a>
        </span>
        <br />
        <span>
          Do you want to have a new account? <a href="/sign-up">Sign up</a>
        </span>
      </div>

      <hr className="separator separator--light" />

      <div className="signin__terms">
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
    </div>
  );
};

export default SignInRender;
