import React from 'react';

import { Navbar } from './Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: true,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
