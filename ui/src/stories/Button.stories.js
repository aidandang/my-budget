import React from 'react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  mode: 'primary',
  label: 'Primary',
};

export const Small = Template.bind({});
Small.args = {
  mode: 'primary',
  size: 'small',
  label: 'Small',
};

export const Large = Template.bind({});
Large.args = {
  mode: 'primary',
  size: 'large',
  label: 'Large',
};

export const Secondary = Template.bind({});
Secondary.args = {
  mode: 'secondary',
  label: 'Secondary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  disabled: true,
};
