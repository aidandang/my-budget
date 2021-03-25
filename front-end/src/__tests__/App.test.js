import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import Root from 'Root';
import App from 'App';
import { LandingPage } from 'components/pages/Landing';
import { SignInPage } from 'components/pages/SignIn';
import { SignUpPage } from 'components/pages/SignUp';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

it('shows LandingPage component', () => {
  wrapped = mount(
    <Root>
      <MemoryRouter initialEntries={['/', '/random']}>
        <App />
      </MemoryRouter>
    </Root>
  );

  expect(wrapped.find(LandingPage)).toHaveLength(1);
});

it('shows SignInPage component', () => {
  wrapped = mount(
    <Root>
      <MemoryRouter initialEntries={['/sign-in']}>
        <App />
      </MemoryRouter>
    </Root>
  );

  expect(wrapped.find(SignInPage)).toHaveLength(1);
});

it('shows SignUpPage component', () => {
  wrapped = mount(
    <Root>
      <MemoryRouter initialEntries={['/sign-up']}>
        <App />
      </MemoryRouter>
    </Root>
  );

  expect(wrapped.find(SignUpPage)).toHaveLength(1);
});
