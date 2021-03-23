import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { LandingPage } from './components/pages/Landing';
import { SignInPage } from './components/pages/SignIn';
import { auth } from './firebase/firebase.utils';

const initialState = {
  currentUser: null,
};

class App extends Component {
  state = initialState;

  unsubcribeFromAuth = null;

  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState((prevState) => ({
        ...prevState,
        currentUser: user,
      }));
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/sign-in" component={SignInPage} />
        <Route path="/" component={LandingPage} />
      </Switch>
    );
  }
}

export default App;
