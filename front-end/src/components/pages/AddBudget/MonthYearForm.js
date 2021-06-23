import React, { Component } from 'react';

import { Input } from '../../common/Form';
import { reduxForm, Field } from 'redux-form';

class MonthYearForm extends Component {
  render() {
    return (
      <div>
        <Field
          name="monthyear"
          type="month"
          component={Input}
          label="Month:"
          autoComplete="none"
        />
      </div>
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

export default reduxForm({ form: 'monthyear', validate, warn })(MonthYearForm);
