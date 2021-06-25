import React from 'react';

import { Example } from './Card';

export default {
  title: 'Components/Card',
  component: Example,
};

const Template = (args) => <Example {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
