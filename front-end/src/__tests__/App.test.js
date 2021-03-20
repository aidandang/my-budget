import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import App from '../App';
import { LandingPage } from '../components/pages/Landing';
import { SignInPage } from '../components/pages/SignIn';

it('shows LandingPage component', () => {
  const wrapped = mount(
    <MemoryRouter initialEntries={['/', '/random']}>
      <App />
    </MemoryRouter>
  );

  expect(wrapped.find(LandingPage)).toHaveLength(1);
});

it('shows SignInPage component', () => {
  const wrapped = mount(
    <MemoryRouter initialEntries={['/sign-in']}>
      <App />
    </MemoryRouter>
  );

  expect(wrapped.find(SignInPage)).toHaveLength(1);
});
