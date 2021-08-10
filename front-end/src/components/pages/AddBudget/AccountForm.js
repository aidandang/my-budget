import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Form, Input } from '../../common/Form';
import { Button } from '../../common/Button';

import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../../../state/actions';
import { reduxForm, Field } from 'redux-form';

class AccountForm extends Component {
  onSubmit = (formProps) => {
    if (this.props.selectedAccount) {
      this.props.updateBudgetAccount(
        formProps,
        this.props.selectedAccount,
        this.props.closeForm
      );
    } else {
      this.props.addBudgetAccount(
        formProps,
        this.props.selectedCategory,
        this.props.closeForm
      );
    }
  };

  componentDidMount() {
    this.props.initialize({
      account: this.props.accountName ? this.props.accountName : '',
      budget: this.props.accountBudget ? this.props.accountBudget : 0,
    });
  }

  render() {
    const {
      handleSubmit,
      pristine,
      submitting,
      invalid,
      budget,
      closeForm,
      selectedAccount,
      buttonText,
      removeBudgetAccount,
    } = this.props;

    return (
      <Form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field
            name="account"
            type="text"
            component={Input}
            label="Account:"
            autoComplete="none"
          />
        </div>
        <div>
          <Field
            name="budget"
            type="text"
            component={Input}
            label="Budget:"
            autoComplete="none"
            placeholder={budget ? budget.toString() : '0.00'}
          />
        </div>
        <div className="space--medium">&nbsp;</div>
        <div>
          <Button
            type={'submit'}
            disabled={invalid || submitting || pristine}
            size={'small'}
          >
            {buttonText ? 'Update' : 'Add'}
          </Button>
          <span className="hspace--small">&nbsp;</span>
          {buttonText && (
            <Button
              size={'small'}
              onClick={(e) => {
                e.preventDefault();
                removeBudgetAccount(selectedAccount, closeForm);
              }}
            >
              {buttonText}
            </Button>
          )}
        </div>
      </Form>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.account) {
    errors.account = 'Required';
  }

  return errors;
};

const warn = (values) => {
  const warnings = {};
  return warnings;
};

AccountForm.propTypes = {
  accountName: PropTypes.string.isRequired,
  accountBudget: PropTypes.string.isRequired,
  selectedAccount: PropTypes.string,
  selectedCategory: PropTypes.string,
  selectedTemplate: PropTypes.number,
  buttonText: PropTypes.string,
  closeForm: PropTypes.func.isRequired,
  updateBudgetAccount: PropTypes.func.isRequired,
  removeBudgetAccount: PropTypes.func.isRequired,
};

export default compose(
  connect(null, actions),
  reduxForm({ form: 'crudaccount', validate, warn })
)(AccountForm);
