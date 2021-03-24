import React from 'react';

import { Button } from './Button';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  mode: 'secondary',
};

export const Disable = Template.bind({});
Disable.args = {
  mode: 'disable',
};

export const Large = Template.bind({});
Large.args = {
  mode: 'primary',
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  mode: 'primary',
  size: 'small',
};
