import React from 'react';

import { SignIn } from './SignIn';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Pages/SignIn',
  component: SignIn,
};

const Template = (args) => <SignIn {...args} />;

export const ButtonEnable = Template.bind({});
ButtonEnable.args = {};
