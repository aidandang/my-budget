import React, { Component } from 'react';

import SignUpRender from './SignUpRender';
import { Button } from '../../common/Button';
import { Form, Input } from '../../common/Form';

import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../../state/actions';

class SignUpContainer extends Component {
  onSubmit = (formProps) => {
    this.props.signup(formProps, () => {
      this.props.history.push('/dashboard');
    });
  };

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;

    return (
      <SignUpRender>
        <Form className="signup__form" onSubmit={handleSubmit(this.onSubmit)}>
          {this.props.errorMessage && (
            <div className="signup__error">{this.props.errorMessage}</div>
          )}

          <div className="signup__input-box">
            <Field
              name="email"
              type="email"
              component={Input}
              label="Email:"
              size="large"
              autoComplete="none"
            />
          </div>
          <div className="space--small">&nbsp;</div>
          <div className="signup__input-box">
            <Field
              name="password"
              type="password"
              component={Input}
              label="Password:"
              size="large"
              autoComplete="none"
            />
          </div>
          <div className="space--small">&nbsp;</div>
          <div className="signup__input-box">
            <Field
              name="passwordConfirm"
              type="password"
              component={Input}
              label="Confirm Password:"
              size="large"
              autoComplete="none"
            />
          </div>

          <div className="signup__email-box">
            <Button
              type={'submit'}
              size={'large'}
              fullwidth={true}
              disabled={invalid || submitting || pristine}
            >
              Sign up with Email
            </Button>
          </div>
        </Form>
      </SignUpRender>
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
  } else if (values.password.length < 8) {
    errors.password = 'Must be 8 characters or more';
  }
  if (!values.passwordConfirm) {
    errors.passwordConfirm = 'Required';
  } else if (values.password !== values.passwordConfirm) {
    errors.passwordConfirm = 'Confirm password does not match';
  }
  return errors;
};

const warn = (values) => {
  const warnings = {};
  return warnings;
};

const mapStateToProps = (state) => ({
  errorMessage: state.auth.errorMessage,
});

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({
    form: 'signup',
    validate,
    warn,
  })
)(SignUpContainer);
