import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Container } from './components/common/Container';
import withAuthChanged from './components/common/HOC/withAuthChanged';

class App extends Component {
  render() {
    return <Route path="/" component={Container} />;
  }
}

export default withAuthChanged(App);
