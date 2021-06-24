import React, { Component } from 'react';
import withRequiredAuth from '../../common/HOC/withRequiredAuth';
import CrudAccount from './CrudAccount';
import MonthYearForm from './MonthYearForm';

import { PageTitle } from '../../common/PageTitle';
import { Note } from '../../common/Note';
import { Table, Tr, Th, Td } from '../../common/Table';

import { connect } from 'react-redux';
import * as actions from '../../../state/actions';

const rightTitle = 'Add Budget';
const noteContent = `HOW TO USE: Select the default or a custom template to create a monthly budget. Choose each category to enter budgets for accounts in it. Add a new account if needed.`;

class AddBudgetContainer extends Component {
  state = {
    selected: 0,
    isEdit: false,
    editId: '',
  };

  onSubmit = (props) => {};

  setSelected = (index) => {
    this.setState((prevState) => ({
      ...prevState,
      selected: index,
    }));
  };

  calBudgetTotal = (budget) => {
    const total = budget.reduce((acc, val) => {
      if (val._id !== 'INCOMES') {
        return acc + val.total;
      } else {
        return acc;
      }
    }, 0);

    return total;
  };

  componentDidMount() {
    this.props.getBudgetTemplates('/users/get-budget-templates');
  }

  render() {
    const { templates } = this.props;

    return (
      <div className="add-budget">
        <div className="space--medium">&nbsp;</div>

        <PageTitle
          leftTitle={{
            first: templates[this.state.selected].name,
            second: 'Template',
          }}
          list={templates}
          selected={this.state.selected}
          setSelected={this.setSelected}
          rightTitle={rightTitle}
        />

        <div className="space--small">&nbsp;</div>

        <Note content={noteContent} />

        <div className="space--medium">&nbsp;</div>

        <MonthYearForm />

        <div className="space--medium">&nbsp;</div>

        <div>
          <Table>
            <Tr>
              <Th last={true} border={'double'}></Th>
              <Th align={'right'} last={true} border={'double'}>
                <span className="budgets__tab">Planning</span>
              </Th>
            </Tr>
            <Tr>
              <Th border={'none'}>Total Budget</Th>
              <Th align={'right'} border={'none'} last={true}>
                {templates[this.state.selected].budget &&
                  `$${this.calBudgetTotal(
                    templates[this.state.selected].budget
                  )}`}
              </Th>
            </Tr>
          </Table>
        </div>

        <div className="space--medium">&nbsp;</div>

        <div className="headline">Summary by Category</div>

        <div>
          {templates[this.state.selected].budget.map((cat, index) => (
            <Table key={cat._id}>
              <Tr>
                <Th border={'none'}>{cat._id}</Th>
                <Th align={'right'} border={'none'} last={true}>
                  <span className="budgets__tab">Planning</span>
                </Th>
              </Tr>
              {cat.accounts.map((acc, index) => (
                <Tr
                  key={acc._id}
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState((prevState) => ({
                      ...prevState,
                      isEdit: !this.state.isEdit,
                      editId: acc._id,
                    }));
                  }}
                >
                  <Td
                    border={`${
                      cat.accounts.length - 1 === index ? 'double' : 'single'
                    }`}
                  >
                    {acc.name}
                  </Td>
                  <Td
                    align={'right'}
                    last={true}
                    border={`${
                      cat.accounts.length - 1 === index ? 'double' : 'single'
                    }`}
                  >
                    {`$${acc.budget}`}
                  </Td>
                </Tr>
              ))}
              <Tr>
                <Th border={'none'}>
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState((prevState) => ({
                        ...prevState,
                        isEdit: !this.state.isEdit,
                        editId: cat._id,
                      }));
                    }}
                  >
                    Add Account
                  </a>
                </Th>
                <Th align={'right'} border={'none'} last={true}>
                  Total: {`$${cat.total}`}
                </Th>
              </Tr>
              {this.state.isEdit && this.state.editId === cat._id && (
                <Tr>
                  <Td colSpan="2">
                    <CrudAccount />
                  </Td>
                </Tr>
              )}
            </Table>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  budgets: state.user.budgets,
  templates: state.user.templates,
  errorMessage: state.user.errorMessage,
});

export default connect(
  mapStateToProps,
  actions
)(withRequiredAuth(AddBudgetContainer));
