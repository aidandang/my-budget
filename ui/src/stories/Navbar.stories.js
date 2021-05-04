import React from 'react';

import { Navbar } from './Navbar';

export default {
  title: 'Components/Navigation Bar',
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    displayName: 'Paul Smith',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  user: {},
};
