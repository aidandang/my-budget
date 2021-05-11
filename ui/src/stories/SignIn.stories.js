import React from 'react';

import { SignIn } from './SignIn';

export default {
  title: 'Pages/SignIn',
  component: SignIn,
};

const Template = (args) => <SignIn {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
