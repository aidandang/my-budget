import React, { Component } from 'react';

import SignUpRender from './SignUpRender';
import { Button } from '../../common/Button';
import { Input } from '../../common/Input';

import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../../state/actions';

class SignUpContainer extends Component {
  onSubmit = (formProps) => {
    this.props.signup(formProps);
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <SignUpRender>
        <form
          className="sign-in-sign-up__form"
          onSubmit={handleSubmit(this.onSubmit)}
        >
          <div className="sign-in-sign-up__input-box">
            <label className="input-label--large">Display Name</label>
            <Input
              type="text"
              name={'displayName'}
              size={'large'}
              autoComplete="none"
            />
          </div>
          <div className="sign-in-sign-up__input-box">
            <label className="input-label--large">Email</label>
            <Input
              type="email"
              name={'email'}
              size={'large'}
              autoComplete="none"
            />
          </div>
          <div className="sign-in-sign-up__input-box">
            <label className="input-label--large">Password</label>
            <Input
              type="password"
              name={'password'}
              size={'large'}
              autoComplete="none"
            />
          </div>
          <div className="sign-in-sign-up__input-box">
            <label className="input-label--large">Confirm Password</label>
            <Input
              type="password"
              name={'passwordConfirm'}
              size={'large'}
              autoComplete="none"
            />
          </div>
          <div>{this.props.errorMessage}</div>
          <div className="sign-in-sign-up__email">
            <Button size={'large'} otherStyle={'button--sign-in-sign-up'}>
              Sign up with Email
            </Button>
          </div>
        </form>
      </SignUpRender>
    );
  }
}

const mapStateToProps = (state) => ({
  errorMessage: state.auth.errorMessage,
});

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({
    form: 'signup',
  })
)(SignUpContainer);
