import React from 'react';

import { Transactions } from './Transactions';
import * as NavbarStories from './Navbar.stories';
import * as MonthStories from './Month.stories';

export default {
  title: 'Pages/Transactions',
  component: Transactions,
};

const Template = (args) => <Transactions {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...NavbarStories.LoggedIn.args,
  ...MonthStories.Primary.args,
  title: 'Transactions',
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...NavbarStories.LoggedOut.args,
  ...MonthStories.Primary.args,
  title: 'Transactions',
};
