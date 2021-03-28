import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { auth } from '../../../firebase/firebase.utils';

class Header extends Component {
  render() {
    return (
      <div>
        {this.props.currentUser ? (
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              auth.signOut();
            }}
          >
            Sign Out
          </Link>
        ) : (
          <Link to="/sign-in">Sign In</Link>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps)(Header);
