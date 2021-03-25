import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { LandingPage } from './components/pages/Landing';
import { SignInPage } from './components/pages/SignIn';
import { SignUpPage } from './components/pages/SignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const initialState = {
  currentUser: null,
};

class App extends Component {
  state = initialState;

  unsubcribeFromAuth = null;

  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState((prevState) => ({
            ...prevState,
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          }));
        });
      } else {
        this.setState((prevState) => ({
          ...prevState,
          currentUser: userAuth,
        }));
      }
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/sign-in" component={SignInPage} />
        <Route exact path="/sign-up" component={SignUpPage} />
        <Route path="/" component={LandingPage} />
      </Switch>
    );
  }
}

export default App;
