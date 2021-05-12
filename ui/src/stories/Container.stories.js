import React from 'react';

import { Container } from './Container';
import * as NavbarStories from './Navbar.stories';

export default {
  title: 'Components/Container',
  component: Container,
};

const Template = (args) => <Container {...args} />;

export const Example = Template.bind({});
Example.args = {
  example: true,
  ...NavbarStories.LoggedIn.args,
};
