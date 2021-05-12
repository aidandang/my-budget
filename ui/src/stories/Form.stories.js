import React from 'react';

import { Form } from './Form';

export default {
  title: 'Components/Form',
  component: Form,
};

const Template = (args) => <Form {...args} />;

export const Text = Template.bind({});
Text.args = {
  label: 'Text Example',
};

export const Date = Template.bind({});
Date.args = {
  label: 'Date Example',
  type: 'date',
  placeholder: 'mm/dd/yyyy',
};

export const Currency = Template.bind({});
Currency.args = {
  label: 'Currency Example',
  type: 'number',
  placeholder: '0.00',
};

export const Select = Template.bind({});
Select.args = {
  isSelect: true,
  label: 'Select Example',
};
