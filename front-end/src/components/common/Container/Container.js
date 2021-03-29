import React, { Component } from 'react';
import { Header } from '../Header';
import { Switch, Route } from 'react-router-dom';
import { LandingPage } from '../../pages/Landing';
import { NotFoundPage } from '../../pages/NotFound';
import { DashboardPage } from '../../pages/Dashboard';
import { SignInPage } from '../../pages/SignIn';
import { SignUpPage } from '../../pages/SignUp';

class Container extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/sign-in" exact component={SignInPage} />
          <Route path="/sign-up" exact component={SignUpPage} />
          <Route path="/dashboard" exact component={DashboardPage} />
          <Route path="/" component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default Container;
