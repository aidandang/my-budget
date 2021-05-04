import React, { Component } from 'react';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { Switch, Route } from 'react-router-dom';
import { LandingPage } from '../../pages/Landing';
import { NotFoundPage } from '../../pages/NotFound';
import { DashboardPage } from '../../pages/Dashboard';
import { SignInPage } from '../../pages/SignIn';
import { SignUpPage } from '../../pages/SignUp';

class Container extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <Navbar />
        </div>
        <div className="content">
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/sign-in" exact component={SignInPage} />
            <Route path="/sign-up" exact component={SignUpPage} />
            <Route path="/dashboard" exact component={DashboardPage} />
            <Route path="/" component={NotFoundPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Container;
