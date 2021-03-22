import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import SignInContainer from 'components/pages/SignIn/SignInContainer';
import SignInRender from 'components/pages/SignIn/SignInRender';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <SignInContainer />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('shows SignInRender components', () => {
  expect(wrapped.find(SignInRender)).toHaveLength(1);
});

it('has email and password inputs', () => {
  expect(wrapped.find('input#sign-in-user-id').prop('type')).toEqual('email');
  expect(wrapped.find('input#sign-in-password').prop('type')).toEqual(
    'password'
  );
});

describe('the email and password input events', () => {
  beforeEach(() => {
    wrapped.find('input#sign-in-user-id').simulate('change', {
      target: { name: 'email', value: 'new@email.com' },
    });
    wrapped.update();

    wrapped.find('input#sign-in-password').simulate('change', {
      target: { name: 'password', value: '123456' },
    });
    wrapped.update();
  });

  it('has email input that user can type in', () => {
    expect(wrapped.find('input#sign-in-user-id').prop('value')).toEqual(
      'new@email.com'
    );
  });

  it('has password input that user can type in', () => {
    expect(wrapped.find('input#sign-in-password').prop('value')).toEqual(
      '123456'
    );
  });

  it('has a button and user can click to submit and clear inputs', () => {
    wrapped.find('a#sign-in-button').simulate('click');
    wrapped.update();

    expect(wrapped.find('input#sign-in-user-id').prop('value')).toEqual('');
    expect(wrapped.find('input#sign-in-password').prop('value')).toEqual('');
  });
});
