import React from 'react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  option: 'primary',
  label: 'Primary',
};

export const Small = Template.bind({});
Small.args = {
  option: 'primary',
  size: 'small',
  label: 'Small',
};

export const Large = Template.bind({});
Large.args = {
  option: 'primary',
  size: 'large',
  label: 'Large',
};

export const Secondary = Template.bind({});
Secondary.args = {
  option: 'secondary',
  label: 'Secondary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  option: 'disabled',
  label: 'Disabled',
};
