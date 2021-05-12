import React from 'react';

import { Transactions } from './Transactions';
import * as NavbarStories from './Navbar.stories';
import * as MonthStories from './Month.stories';

export default {
  title: 'Pages/Transactions',
  component: Transactions,
};

const Template = (args) => <Transactions {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ...NavbarStories.LoggedIn.args,
  ...MonthStories.Primary.args,
  title: 'Transactions',
};

export const AddItem = Template.bind({});
AddItem.args = {
  ...NavbarStories.LoggedIn.args,
  ...MonthStories.Primary.args,
  title: 'Transactions',
  isAddItem: true,
};

export const EditItem = Template.bind({});
EditItem.args = {
  ...NavbarStories.LoggedIn.args,
  ...MonthStories.Primary.args,
  title: 'Transactions',
  isEditItem: true,
};
