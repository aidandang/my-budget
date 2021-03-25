import React from 'react';

import { SignUp } from './SignUp';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Pages/SignUp',
  component: SignUp,
};

const Template = (args) => <SignUp {...args} />;

export const ButtonEnable = Template.bind({});
ButtonEnable.args = {
  mode: 'primary',
};

export const ButtonDisable = Template.bind({});
ButtonDisable.args = {
  mode: 'disable',
};
