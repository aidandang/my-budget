import React from 'react';

import { Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  label: 'Label',
};

export const Date = Template.bind({});
Date.args = {
  label: 'Label',
  type: 'date',
  placeholder: 'mm/dd/yyyy',
};

export const Currency = Template.bind({});
Currency.args = {
  label: 'Label',
  type: 'number',
  placeholder: '0.00',
};
