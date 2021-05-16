import React from 'react';

import { AddBudget } from './AddBudget';
import * as NavbarStories from './Navbar.stories';

export default {
  title: 'Pages/AddBudget',
  component: AddBudget,
};

const Template = (args) => <AddBudget {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ...NavbarStories.LoggedIn.args,
};
