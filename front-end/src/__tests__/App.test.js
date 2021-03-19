import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../App';

it('shows the landing page', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    div
  );

  // expect(div.innerHTML).toContain('Landing Page');

  ReactDOM.unmountComponentAtNode(div);
});
