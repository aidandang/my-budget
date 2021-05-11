import React from 'react';

import { Container } from './Container';
import { Button } from './Button';
import { Input } from './Input';
import './signup.css';

export const SignUp = ({ user }) => {
  return (
    <Container user={user}>
      <div className="signup">
        <h2 className="signup__title">Sign Up</h2>

        <div className="signup__subtitle">
          Sign up to Monthly Budget and all other <a href="/">aidandang.com</a>{' '}
          applications.
        </div>

        <div className="space--medium"></div>

        <form className="signup__form">
          <div className="signup__input-box">
            <Input type="email" label="Email" />
          </div>

          <div className="signup__input-box">
            <Input type="password" label="Password" />
          </div>

          <div className="signup__input-box">
            <Input type="password" label="Confirm Password" />
          </div>

          <div className="signup__email-box">
            <Button
              option={'primary'}
              label={'Sign up with Email'}
              size={'large'}
              fullwidth={true}
            ></Button>
          </div>
        </form>

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
    </Container>
  );
};
