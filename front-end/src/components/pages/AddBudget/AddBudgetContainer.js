import React, { Component } from 'react';
import withRequiredAuth from '../../common/HOC/withRequiredAuth';

import { PageTitle } from '../../common/PageTitle';
import { Note } from '../../common/Note';
import { Form, Input } from '../../common/Form';
import { Table, Tr, Th, Td } from '../../common/Table';
import { reduxForm, Field } from 'redux-form';
import { Button } from '../../common/Button';
import { defaultBudget } from '../../../data/defaultBudget';

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
  state = {
    CHARITY: {},
    SAVING: {},
  };

  onSubmit = (props) => {};

  componentDidMount() {
    this.props.getBudgetTemplates('/users/get-budget-templates');
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;

    return (
      <div className="add-budget">
        <div className="space--medium">&nbsp;</div>

        {list && (
          <PageTitle list={list} selected={null} rightTitle={rightTitle} />
        )}

        <div className="space--small">&nbsp;</div>

        <Note content={noteContent} />

        <div className="space--medium">&nbsp;</div>

        <Form onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <Field
              name="monthyear"
              type="month"
              component={Input}
              label="Month:"
              autoComplete="none"
            />
          </div>

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
                  $3,800.00
                </Th>
              </Tr>
            </Table>
          </div>

          <div className="space--medium">&nbsp;</div>

          <div className="headline">Summary by Category</div>

          <div>
            {defaultBudget.map((cat) => (
              <Table key={cat._id}>
                <Tr>
                  <Th border={'none'}>{cat._id}</Th>
                  <Th align={'right'} border={'none'} last={true}>
                    <span className="budgets__tab">Planning</span>
                  </Th>
                </Tr>
                {cat.accounts.map((acc, index) => (
                  <Tr key={acc._id}>
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
                      }}
                    >
                      Add Account
                    </a>
                  </Th>
                  <Th align={'right'} border={'none'} last={true}>
                    Total: {`$0`}
                  </Th>
                </Tr>
              </Table>
            ))}
          </div>

          <div className="space--medium">&nbsp;</div>

          <hr className="separator separator--bold" />

          <div className="space--medium">&nbsp;</div>

          <div>
            <Button
              type={'submit'}
              disabled={invalid || submitting || pristine}
            >
              Add Budget
            </Button>
            <span className="hspace--small">&nbsp;</span>
            <Button type={'reset'}>Reset</Button>
          </div>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  budgets: state.user.budgets,
  errorMessage: state.user.errorMessage,
});

const validate = (values) => {
  const errors = {};

  if (!values.monthyear) {
    errors.monthyear = 'Required';
  }

  return errors;
};

const warn = (values) => {
  const warnings = {};
  return warnings;
};

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({
    form: 'addbudget',
    validate,
    warn,
  })
)(withRequiredAuth(AddBudgetContainer));
