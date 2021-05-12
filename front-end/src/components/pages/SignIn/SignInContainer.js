import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import SignInRender from './SignInRender';
import { Button } from '../../common/Button';
import { Form, Input } from '../../common/Form';
import google from '../../../assets/google.svg';
import { signInWithGoogle } from '../../../firebase/firebase.utils';

import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../../state/actions';

class SignInContainer extends Component {
  goToDashboard = () => {
    this.history.push('/dashboard');
  };

  onSubmit = (formProps) => {
    this.props.signin(formProps, this.goToDashboard);
  };

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;

    return (
      <>
        {this.props.currentUser && <Redirect to="/dashboard" />}

        <SignInRender>
          <div className="sign-in-sign-up__google">
            <Button
              mode={'secondary'}
              size={'large'}
              fullwidth={true}
              onClick={(e) => {
                e.preventDefault();
                signInWithGoogle();
              }}
            >
              <img src={google} alt="gl" className="google-logo" />
              <span className="google-text">Sign in with Google</span>
            </Button>
          </div>

          <div className="sign-in-sign-up__separator">
            <span className="sign-in-sign-up__separator--left"></span>
            <span className="sign-in-sign-up__separator--or">or</span>
            <span className="sign-in-sign-up__separator--right"></span>
          </div>

          <Form
            className="sign-in-sign-up__form"
            onSubmit={handleSubmit(this.onSubmit)}
          >
            {this.props.errorMessage && (
              <div className="sign-in-sign-up__error">
                {this.props.errorMessage}
              </div>
            )}

            <div className="sign-in-sign-up__input-box">
              <Field
                name="email"
                type="email"
                component={Input}
                label="Email"
                size="large"
                autoComplete="none"
              />
            </div>
            <div className="sign-in-sign-up__input-box">
              <Field
                name="password"
                type="password"
                component={Input}
                label="Password"
                size="large"
                autoComplete="none"
              />
            </div>
            <div className="sign-in-sign-up__input-box">
              <div className="checkbox--sign-in-sign-up">
                <input type="checkbox" value="lsRememberMe" id="rememberMe" />
                <span>&nbsp;</span>
                <label for="rememberMe">Remember me</label>
              </div>
            </div>
            <div className="sign-in-sign-up__email">
              <Button
                size={'large'}
                fullwidth={true}
                disabled={invalid || submitting || pristine}
              >
                Sign in with Email
              </Button>
            </div>
          </Form>
        </SignInRender>
      </>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  }

  return errors;
};

const warn = (values) => {
  const warnings = {};
  return warnings;
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
  errorMessage: state.auth.errorMessage,
});

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({
    form: 'signin',
    validate,
    warn,
  })
)(SignInContainer);
