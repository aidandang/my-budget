import React, { Component } from 'react';

import SignInRender from './SignInRender';
import { signInWithGoogle } from '../../../firebase/firebase.utils';
import { Button } from '../../common/Button';
import { Input } from '../../common/Input';

const initialState = {
  email: '',
  password: '',
};

class SignInContainer extends Component {
  state = initialState;

  handleChange = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState((prevState) => ({
      ...prevState,
      ...initialState,
    }));
  };

  render() {
    return (
      <SignInRender signInWithGoogle={signInWithGoogle}>
        <div className="sign-in-sign-up__input-box">
          <Input
            type="email"
            id="sign-in-user-id"
            size={'large'}
            label={'Email'}
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </div>
        <div className="sign-in-sign-up__input-box">
          <Input
            type="password"
            id="sign-in-password"
            size={'large'}
            label={'Password'}
            name="password"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </div>
        <div className="sign-in-sign-up__email">
          <Button
            id="sign-in-button"
            mode={'primary'}
            size={'large'}
            otherStyle={'button--sign-in-sign-up'}
            onClick={this.handleSubmit}
          >
            Sign in with Email
          </Button>
        </div>
      </SignInRender>
    );
  }
}

export default SignInContainer;
