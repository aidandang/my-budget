import React from 'react';

import { Budgets } from './Budgets';
import * as NavbarStories from './Navbar.stories';
import * as MonthStories from './Month.stories';

export default {
  title: 'Pages/Budgets',
  component: Budgets,
};

const Template = (args) => <Budgets {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ...NavbarStories.LoggedIn.args,
  ...MonthStories.Primary.args,
  title: 'Budgets',
  isBudgets: true,
};

export const AddItem = Template.bind({});
AddItem.args = {
  ...NavbarStories.LoggedIn.args,
  ...MonthStories.Primary.args,
  title: 'Budgets',
  isAddItem: true,
  isBudgets: true,
};

export const EditItem = Template.bind({});
EditItem.args = {
  ...NavbarStories.LoggedIn.args,
  ...MonthStories.Primary.args,
  title: 'Budgets',
  isEditItem: true,
  isBudgets: true,
};
