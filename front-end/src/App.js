import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { LandingPage } from './components/pages/Landing'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    )
  }
}

export default App