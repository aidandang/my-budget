import React from 'react';

import { AddBudget } from './AddBudget';
import * as NavbarStories from './Navbar.stories';
import * as PageTitleStories from './PageTitle.stories';

export default {
  title: 'Pages/AddBudget',
  component: AddBudget,
};

const Template = (args) => <AddBudget {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ...NavbarStories.LoggedIn.args,
  ...PageTitleStories.AddBudget.args,
};
