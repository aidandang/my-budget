import React from 'react';

import { Note } from './Note';

export default {
  title: 'Components/Note',
  component: Note,
};

const Template = (args) => <Note {...args} />;

const content = `HOW TO USE: Enter your information into the Transactions table below.
Choose a category for each transaction, then check the Budget sheet to
see how each category compares with your budget.`;

export const Primary = Template.bind({});
Primary.args = {
  content: content,
};
