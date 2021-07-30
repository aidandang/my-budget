import React, { Component } from 'react';

import { auth } from '../../../firebase/firebase.utils';

import { connect } from 'react-redux';
import * as actions from '../../../state/actions';

// eslint-disable-next-line import/no-anonymous-default-export
export default (ChildComponent) => {
  class ComposedComponent extends Component {
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
      return <>{this.props.checked && <ChildComponent {...this.props} />}</>;
    }
  }

  const mapStateToProps = (state) => ({
    checked: state.auth.checked,
  });

  return connect(mapStateToProps, actions)(ComposedComponent);
};
