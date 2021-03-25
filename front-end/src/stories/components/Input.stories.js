import React from 'react';

import { Input } from './Input';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Disable = Template.bind({});
Disable.args = {
  disabled: true,
  label: 'Disabled',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Small',
};
