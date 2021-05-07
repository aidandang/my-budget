import React from 'react';

import { Month } from './Month';

export default {
  title: 'Components/Month',
  component: Month,
};

const Template = (args) => <Month {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: [
    {
      id: 0,
      month: 'May',
      year: '2021',
    },
    {
      id: 1,
      month: 'April',
      year: '2021',
    },
    {
      id: 2,
      month: 'March',
      year: '2021',
    },
    {
      id: 3,
      month: 'February',
      year: '2021',
    },
    {
      id: 4,
      month: 'January',
      year: '2021',
    },
    {
      id: 5,
      month: 'December',
      year: '2020',
    },
  ],
  selected: 0,
};
