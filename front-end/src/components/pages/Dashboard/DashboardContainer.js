import React, { Component } from 'react';
import withRequiredAuth from '../../common/HOC/withRequiredAuth';
import DashboardRender from './DashboardRender';

class DashboardContainer extends Component {
  render() {
    return (
      <div>
        <DashboardRender />
      </div>
    );
  }
}

export default withRequiredAuth(DashboardContainer);
