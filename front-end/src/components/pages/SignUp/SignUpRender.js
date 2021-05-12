import React from 'react';

const SignUpRender = ({ children }) => (
  <div className="signup">
    <h2 className="signup__title">Sign Up</h2>

    <div className="signup__subtitle">
      Sign up to My Budget and all other <a href="/">aidandang.com</a>{' '}
      applications.
    </div>

    <div className="space--medium"></div>

    {children}

    <div className="space--medium"></div>

    <hr className="separator separator--light" />

    <div className="signup__terms">
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

export default SignUpRender;
