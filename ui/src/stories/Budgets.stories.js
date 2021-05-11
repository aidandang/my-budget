import React from 'react';

import { Budgets } from './Budgets';
import * as NavbarStories from './Navbar.stories';
import * as MonthStories from './Month.stories';

export default {
  title: 'Pages/Budgets',
  component: Budgets,
};

const Template = (args) => <Budgets {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...NavbarStories.LoggedIn.args,
  ...MonthStories.Primary.args,
  title: 'Budgets',
};
