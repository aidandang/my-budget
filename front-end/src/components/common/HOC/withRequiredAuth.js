import React, { Component } from 'react';
import { connect } from 'react-redux';

// eslint-disable-next-line import/no-anonymous-default-export
export default (ChildComponent) => {
  class ComposedComponent extends Component {
    shouldNavigateAway() {
      if (!this.props.currentUser) {
        this.props.history.push('/sign-in');
      }
    }

    // Our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }
    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { currentUser: state.auth.currentUser };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
