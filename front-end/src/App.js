import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Container } from './components/common/Container';
import { SignInPage } from './components/pages/SignIn';
import { SignUpPage } from './components/pages/SignUp';
import { auth } from './firebase/firebase.utils';

import { connect } from 'react-redux';
import * as actions from './state/actions';

class App extends Component {
  unsubcribeFromAuth = null;

  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged((userAuth) => {
      this.props.authChanged(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <>
        {this.props.isAuthChecked && (
          <Switch>
            <Route exact path="/sign-in" component={SignInPage} />
            <Route exact path="/sign-up" component={SignUpPage} />
            <Route path="/" component={Container} />
          </Switch>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthChecked: state.auth.isAuthChecked,
});

export default connect(mapStateToProps, actions)(App);
