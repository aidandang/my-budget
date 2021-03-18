import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { LandingPage } from './components/pages/Landing';
import { SignInPage } from './components/pages/SignIn';

class App extends Component {
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
