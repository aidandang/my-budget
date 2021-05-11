import React from 'react';

import { SignUp } from './SignUp';

export default {
  title: 'Pages/SignUp',
  component: SignUp,
};

const Template = (args) => <SignUp {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
