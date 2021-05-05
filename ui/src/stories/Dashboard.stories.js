import React from 'react';

import { Dashboard } from './Dashboard';
import * as NavbarStories from './Navbar.stories';

export default {
  title: 'Components/Dashboard',
  component: Dashboard,
};

const Template = (args) => <Dashboard {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...NavbarStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...NavbarStories.LoggedOut.args,
};
