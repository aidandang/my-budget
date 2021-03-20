import React, { Component } from 'react';
import SignInRender from './SignInRender';

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
      <SignInRender>
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
        <a
          href="/"
          className="btn btn--primary btn--sign-in sign-in-box__email"
          onClick={this.handleSubmit}
        >
          <span>Sign in with Email</span>
        </a>
      </SignInRender>
    );
  }
}

export default SignInContainer;