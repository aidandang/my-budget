import React from 'react';

import { PageTitle } from './PageTitle';

export default {
  title: 'Components/PageTitle',
  component: PageTitle,
};

const Template = (args) => <PageTitle {...args} />;

export const Month = Template.bind({});
Month.args = {
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
  title: 'Budgets',
  lefttitle: 'May',
  month: true,
};

export const AddBudget = Template.bind({});
AddBudget.args = {
  data: [
    {
      id: 0,
      month: 'Template 01',
      year: '',
    },
    {
      id: 1,
      month: 'Template 02',
      year: '',
    },
  ],
  selected: 10,
  lefttitle: 'Default Template',
  title: 'Add Budget',
};
