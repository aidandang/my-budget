import React, { Component } from 'react';

import { Form, Input } from '../../common/Form';
import { reduxForm, Field } from 'redux-form';
import { Button } from '../../common/Button';

class CrudAccount extends Component {
  onSubmit = (props) => {};

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;

    return (
      <Form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field
            name="account"
            type="text"
            component={Input}
            label="Account:"
            autoComplete="none"
            placeholder={this.props.account}
          />
        </div>
        <div>
          <Field
            name="budget"
            type="number"
            component={Input}
            label="Budget:"
            autoComplete="none"
            placeholder={this.props.budget}
          />
        </div>
        <div className="space--medium">&nbsp;</div>
        <div>
          <Button type={'submit'} disabled={invalid || submitting || pristine}>
            Add Budget
          </Button>
          <span className="hspace--small">&nbsp;</span>
          <Button type={'reset'}>Reset</Button>
        </div>
      </Form>
    );
  }
}

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

export default reduxForm({ form: 'crudaccount', validate, warn })(CrudAccount);
