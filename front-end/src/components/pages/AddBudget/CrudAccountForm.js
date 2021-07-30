import React, { Component } from 'react';

import { Form, Input } from '../../common/Form';
import { reduxForm, Field } from 'redux-form';
import { Button } from '../../common/Button';

class CrudAccountForm extends Component {
  componentDidMount() {
    this.props.initialize({
      account: this.props.account ? this.props.account : '',
    });
  }

  onSubmit = (props) => {};

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
            Add
          </Button>
          <span className="hspace--small">&nbsp;</span>
          <Button type={'reset'} size={'small'}>
            Reset
          </Button>
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

export default reduxForm({ form: 'crudaccount', validate, warn })(
  CrudAccountForm
);
