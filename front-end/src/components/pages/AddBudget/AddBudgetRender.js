import React from 'react';

import { PageTitle } from '../../common/PageTitle';
import { Note } from '../../common/Note';
import { Form, Input } from '../../common/Form';

import { reduxForm, Field } from 'redux-form';

function AddBudgetRender({ list, selected, rightTitle, noteContent }) {
  return (
    <div className="add-budget">
      <div className="space--medium">&nbsp;</div>

      {list && (
        <PageTitle list={list} selected={selected} rightTitle={rightTitle} />
      )}

      <div className="space--small">&nbsp;</div>

      <Note content={noteContent} />

      <div className="space--medium">&nbsp;</div>

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

      <div className="space--medium">&nbsp;</div>
    </div>
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
})(AddBudgetRender);
