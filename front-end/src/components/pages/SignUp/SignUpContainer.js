import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../state/actions';

import SignUpRender from './SignUpRender';
import { Button } from '../../common/Button';
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
          <label htmlFor="sign-in-display-name">Display Name</label>
          <div className="sign-in-sign-up__input">
            <input
              type="text"
              id="sign-in-display-name"
              name="displayName"
              className="input input--sign-in-sign-up"
              onChange={this.handleChange}
              value={this.state.displayName}
              required
            />
          </div>
        </div>

        <div className="sign-in-sign-up__input-box">
          <label htmlFor="sign-in-user-id">Email</label>
          <div className="sign-in-sign-up__input">
            <input
              type="email"
              id="sign-up-user-id"
              name="email"
              className="input input--sign-in-sign-up"
              onChange={this.handleChange}
              value={this.state.email}
              required
            />
          </div>
        </div>

        <div className="sign-in-sign-up__input-box">
          <label htmlFor="sign-in-password">Password</label>
          <div className="sign-in-sign-up__input">
            <input
              type="password"
              id="sign-up-password"
              name="password"
              className="input input--sign-in-sign-up"
              onChange={this.handleChange}
              value={this.state.password}
              required
            />
          </div>
        </div>

        <div className="sign-in-sign-up__input-box">
          <label htmlFor="sign-in-password-confirm">Password Confirm</label>
          <div className="sign-in-sign-up__input">
            <input
              type="password"
              id="sign-in-password-confirm"
              name="passwordConfirm"
              className="input input--sign-in-sign-up"
              onChange={this.handleChange}
              value={this.state.passwordConfirm}
              required
            />
          </div>
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
