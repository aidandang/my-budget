import React, { Component } from 'react';
import withRequiredAuth from '../../common/HOC/withRequiredAuth';
import CrudAccount from './CrudAccount';
import MonthYearForm from './MonthYearForm';

import { PageTitle } from '../../common/PageTitle';
import { Note } from '../../common/Note';
import { Card, Row, Col } from '../../common/Card';

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

        <Card>
          <Row header={true} border={true}>
            <Col></Col>
            <Col right={true}>Planning</Col>
          </Row>
          <Row bold={true}>
            <Col>Total Budget</Col>
            <Col right={true}>
              {templates[this.state.selected].budget &&
                `$${this.calBudgetTotal(
                  templates[this.state.selected].budget
                )}`}
            </Col>
          </Row>
        </Card>

        <div className="space--medium">&nbsp;</div>

        <div className="headline">Summary by Category</div>

        {templates[this.state.selected].budget.map((cat, index) => (
          <>
            <div className="space--medium">&nbsp;</div>
            <Card key={cat._id}>
              <Row header={true}>
                <Col>{cat._id}</Col>
                <Col right={true}>Planning</Col>
              </Row>
              {cat.accounts.map((acc, index) => (
                <>
                  <Row
                    key={acc._id}
                    border={true}
                    last={cat.accounts.length - 1 === index ? true : false}
                    onClick={(e) => {
                      e.stopPropagation();
                      this.setState((prevState) => ({
                        ...prevState,
                        isEdit: !this.state.isEdit,
                        editId: acc._id,
                      }));
                    }}
                  >
                    <Col>{acc.name}</Col>
                    <Col right={true}>{`$${acc.budget}`}</Col>
                  </Row>
                  {this.state.isEdit && this.state.editId === acc._id && (
                    <>
                      <div className="space--small">&nbsp;</div>

                      <Row>
                        <Col>
                          <CrudAccount account={acc.name} budget={acc.budget} />
                        </Col>
                      </Row>

                      <div className="space--small">&nbsp;</div>
                    </>
                  )}
                </>
              ))}
              <Row bold={true}>
                <Col>
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
                </Col>
                <Col right="true">Total: {`$${cat.total}`}</Col>
              </Row>
              {this.state.isEdit && this.state.editId === cat._id && (
                <Row>
                  <Col>
                    <CrudAccount />
                  </Col>
                </Row>
              )}
            </Card>
          </>
        ))}
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
