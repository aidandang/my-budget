import React from 'react';

import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Example = Template.bind({});
Example.args = {
  example: true,
};
