import React from 'react';

import { Header } from './Header';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Header',
  component: Header,
};

const Template = (args) => <Header {...args}>Button</Header>;

export const Primary = Template.bind({});
Primary.args = {};
