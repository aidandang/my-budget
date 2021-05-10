import React from 'react';

import { Container } from './Container';
import * as NavbarStories from './Navbar.stories';

export default {
  title: 'Components/Container',
  component: Container,
};

const Template = (args) => <Container {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ...NavbarStories.LoggedIn.args,
};
