import React from 'react';

import { Dashboard } from './Dashboard';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Pages/Dashboard',
  component: Dashboard,
};

const Template = (args) => <Dashboard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
