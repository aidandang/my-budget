import React from 'react';

import { Container } from './Container';
import * as NavbarStories from './Navbar.stories';

export default {
  title: 'Components/Container',
  component: Container,
};

const Template = (args) => <Container {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...NavbarStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...NavbarStories.LoggedOut.args,
};
