import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Form, Input } from '../../common/Form';
import { Button } from '../../common/Button';

import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../../../state/actions';
import { reduxForm, Field } from 'redux-form';

class CrudAccountForm extends Component {
  componentDidMount() {
    this.props.initialize({
      account: this.props.accountName ? this.props.accountName : '',
      budget: this.props.accountBudget ? this.props.accountBudget : 0,
    });
  }

  onSubmit = (formProps) => {
    if (this.props.selectedAccount >= 0) {
      this.props.updateBudgetAccount(
        formProps,
        this.props.selectedTemplate,
        this.props.selectedCategory,
        this.props.selectedAccount
      );
    } else {
      this.props.addBudgetAccount(
        formProps,
        this.props.selectedTemplate,
        this.props.selectedCategory
      );
    }

    this.props.closeForm();
  };

  render() {
    const { handleSubmit, pristine, submitting, invalid, budget } = this.props;

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
            type="number"
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
            {this.props.buttonText ? 'Update' : 'Add'}
          </Button>
          <span className="hspace--small">&nbsp;</span>
          {this.props.buttonText && (
            <Button
              size={'small'}
              onClick={(e) => {
                e.preventDefault();
                this.props.removeBudgetAccount(
                  this.props.selectedTemplate,
                  this.props.selectedCategory,
                  this.props.selectedAccount
                );
                this.props.closeForm();
              }}
            >
              {this.props.buttonText}
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

CrudAccountForm.propTypes = {
  accountName: PropTypes.string.isRequired,
  accountBudget: PropTypes.number.isRequired,
  selectedTemplate: PropTypes.number.isRequired,
  selectedCategory: PropTypes.number.isRequired,
  selectedAccount: PropTypes.number.isRequired,
  closeForm: PropTypes.func.isRequired,
  updateBudgetAccount: PropTypes.func.isRequired,
  removeBudgetAccount: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
};

export default compose(
  connect(null, actions),
  reduxForm({ form: 'crudaccount', validate, warn })
)(CrudAccountForm);
