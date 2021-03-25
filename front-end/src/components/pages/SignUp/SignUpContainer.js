import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../state/actions';

import SignUpRender from './SignUpRender';
import { Button } from '../../common/Button';
import { Input } from '../../common/Input';
import {
  auth,
  createUserProfileDocument,
} from '../../../firebase/firebase.utils';

const initialState = {
  displayName: '',
  email: '',
  password: '',
  passwordConfirm: '',
  mode: 'primary',
};

class SignUpContainer extends Component {
  state = initialState;

  handleChange = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmedPassword } = this.state;

    if (password !== confirmedPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const user = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });

      this.setState((prevState) => ({
        ...prevState,
        ...initialState,
      }));
    } catch (err) {
      console.log(err);
    }

    this.setState((prevState) => ({
      ...prevState,
      ...initialState,
    }));
  };

  render() {
    return (
      <SignUpRender>
        <div className="sign-in-sign-up__input-box">
          <Input
            type={'text'}
            id={'sign-up-display-name'}
            size={'large'}
            label={'Display Name'}
            name={'displayName'}
            value={this.state.displayName}
            onChange={this.handleChange}
          />
        </div>

        <div className="sign-in-sign-up__input-box">
          <Input
            type={'email'}
            id={'sign-up-user-id'}
            size={'large'}
            label={'Email'}
            name={'email'}
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>

        <div className="sign-in-sign-up__input-box">
          <Input
            type={'password'}
            id={'sign-up-password'}
            size={'large'}
            label={'Password'}
            name={'password'}
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>

        <div className="sign-in-sign-up__input-box">
          <Input
            type={'password'}
            id={'sign-up-password-confirm'}
            size={'large'}
            label={'Password Confirm'}
            name={'passwordConfirm'}
            value={this.state.passwordConfirm}
            onChange={this.handleChange}
          />
        </div>

        <div className="sign-in-sign-up__email">
          <Button
            id={'sign-up-button'}
            mode={this.state.mode}
            size={'large'}
            otherStyle={'button--sign-in-sign-up'}
            onClick={this.handleSubmit}
          >
            Sign up with Email
          </Button>
        </div>
      </SignUpRender>
    );
  }
}

export default connect(null, actions)(SignUpContainer);
