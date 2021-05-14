import React, { Component } from 'react';
import withRequiredAuth from '../../common/HOC/withRequiredAuth';
import AddBudgetRender from './AddBudgetRender';

class AddBudgetContainer extends Component {
  render() {
    return (
      <div>
        <AddBudgetRender />
      </div>
    );
  }
}

export default withRequiredAuth(AddBudgetContainer);
