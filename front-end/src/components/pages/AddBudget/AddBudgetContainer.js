import React, { Component } from 'react';
import withRequiredAuth from '../../common/HOC/withRequiredAuth';
import AddBudgetRender from './AddBudgetRender';

import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../state/actions';

const rightTitle = 'Add Budget';
const list = [
  {
    first: 'Default',
    second: 'Template',
  },
];
const noteContent = `HOW TO USE: Select the default or a custom template to create a monthly budget. Choose each category to enter budgets for accounts in it. Add a new account if needed.`;

class AddBudgetContainer extends Component {
  render() {
    return (
      <div>
        <AddBudgetRender
          list={list}
          rightTitle={rightTitle}
          noteContent={noteContent}
          budget={this.props.budget}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  budget: state.template.budget,
  errorMessage: state.template.errorMessage,
});

export default compose(connect(mapStateToProps, actions))(
  withRequiredAuth(AddBudgetContainer)
);
