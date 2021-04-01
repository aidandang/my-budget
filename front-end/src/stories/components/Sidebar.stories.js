import React from 'react';

import { Sidebar } from './Sidebar';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Sidebar',
  component: Sidebar,
};

const Template = (args) => <Sidebar {...args}>Sidebar</Sidebar>;

export const Primary = Template.bind({});
Primary.args = {};
