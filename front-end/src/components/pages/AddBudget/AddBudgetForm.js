import React from 'react';

import { Form, Input } from '../../common/Form';

import { reduxForm, Field } from 'redux-form';

function AddBudgetForm() {
  return (
    <Form>
      <div>
        <Field
          name="monthyear"
          type="month"
          component={Input}
          label="Month:"
          autoComplete="none"
        />
      </div>
    </Form>
  );
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

export default reduxForm({
  form: 'addbudget',
  validate,
  warn,
})(AddBudgetForm);
