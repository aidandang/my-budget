import React from 'react';
import { mount } from 'enzyme';

import SignInContainer from 'components/pages/SignIn/SignInContainer';
import SignInRender from 'components/pages/SignIn/SignInRender';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

it('shows SignInRender components', () => {
  wrapped = mount(<SignInContainer />);

  expect(wrapped.find(SignInRender)).toHaveLength(1);
});
