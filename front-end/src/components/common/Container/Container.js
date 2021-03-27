import React, { Component } from 'react';
import { Header } from '../Header';
import { Switch, Route } from 'react-router-dom';
import { LandingPage } from '../../pages/Landing';
import { NotFoundPage } from '../../pages/NotFound';
import { DashboardPage } from '../../pages/Dashboard';

class Container extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/dashboard" exact component={DashboardPage} />
          <Route path="/" component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default Container;
