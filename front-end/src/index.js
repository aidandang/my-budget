import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Root from './Root';
import App from './App';
import './sass/main.scss';

ReactDOM.render(
  <Root>
    <Router>
      <App />
    </Router>
  </Root>,
  document.getElementById('root')
);
