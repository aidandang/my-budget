import React from 'react';

import { Container } from './Container';
import { Button } from './Button';
import { Input } from './Input';
import google from './assets/google.svg';
import './signin.css';

export const SignIn = ({ user }) => {
  return (
    <Container user={user}>
      <div className="signin">
        <h2 className="signin__title">Sign in</h2>

        <div className="signin__subtitle">
          Sign in with either your Google account or <a href="/">My Budget</a>{' '}
          application account.
        </div>

        <div className="signin__google-box">
          <Button option={'secondary'} size={'large'} fullwidth={true}>
            <img src={google} alt="gl" className="google-logo" />
            <span className="google-text">Sign in with Google</span>
          </Button>
        </div>

        <div className="signin__separator">
          <span className="signin__separator--left"></span>
          <span className="signin__separator--or">or</span>
          <span className="signin__separator--right"></span>
        </div>

        <form className="signin__form">
          <div className="signin__input-box">
            <Input type="email" label="Email" />
          </div>
          <div className="signin__input-box">
            <Input type="password" label="Password" />
          </div>
          <div className="space--small"></div>
          <div className="signin__input-box">
            <div className="signin__checkbox">
              <input type="checkbox" value="lsRememberMe" id="rememberMe" />
              <span>&nbsp;</span>
              <label htmlFor="rememberMe" className="signin__checkbox__label">
                Remember me
              </label>
            </div>
          </div>
          <div className="signin__email-box">
            <Button
              option={'primary'}
              label={'Sign in with Email'}
              size={'large'}
              fullwidth={true}
            ></Button>
          </div>
        </form>

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
    </Container>
  );
};
