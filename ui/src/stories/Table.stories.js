import React from 'react';

import { Table } from './Table';

export default {
  title: 'Components/Table',
  component: Table,
};

const Template = (args) => <Table {...args} />;

export const Example = Template.bind({});
Example.args = {
  example: true,
};
