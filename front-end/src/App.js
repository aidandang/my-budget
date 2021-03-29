import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Container } from './components/common/Container';
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
        {this.props.isAuthChecked && <Route path="/" component={Container} />}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthChecked: state.auth.isAuthChecked,
});

export default connect(mapStateToProps, actions)(App);
