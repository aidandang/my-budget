import React from 'react';

import { PageTitle } from './PageTitle';

export default {
  title: 'Components/PageTitle',
  component: PageTitle,
};

const Template = (args) => <PageTitle {...args} />;

export const Example = Template.bind({});
Example.args = {
  list: [
    {
      id: 0,
      first: 'May',
      second: '2021',
    },
    {
      id: 1,
      first: 'April',
      second: '2021',
    },
    {
      id: 2,
      first: 'March',
      second: '2021',
    },
    {
      id: 3,
      first: 'February',
      second: '2021',
    },
    {
      id: 4,
      first: 'January',
      second: '2021',
    },
    {
      id: 5,
      first: 'December',
      second: '2020',
    },
  ],
  selected: 0,
  rightTitle: 'Budgets',
};
