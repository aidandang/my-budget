import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../state/actions';

import SignInRender from './SignInRender';
import { signInWithGoogle } from '../../../firebase/firebase.utils';
import { Button } from '../../common/Form/Button';

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

    this.props.saveUser(this.state);
    this.setState((prevState) => ({
      ...prevState,
      ...initialState,
    }));
  };

  render() {
    return (
      <SignInRender signInWithGoogle={signInWithGoogle}>
        <div className="sign-in-box__user-id">
          <label htmlFor="sign-in-user-id">Email</label>
          <div className="sign-in-box__input">
            <input
              type="email"
              id="sign-in-user-id"
              name="email"
              className="input input--sign-in"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
        </div>
        <div className="sign-in-box__password">
          <label htmlFor="sign-in-password">Password</label>
          <div className="sign-in-box__input">
            <input
              type="password"
              id="sign-in-password"
              name="password"
              className="input input--sign-in"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>
        </div>
        <div className="sign-in-box__email">
          <Button
            primary={true}
            size={'large'}
            otherStyle={'button--sign-in'}
            onClick={this.handleSubmit}
          >
            Sign in with Email
          </Button>
        </div>
      </SignInRender>
    );
  }
}

export default connect(null, actions)(SignInContainer);
