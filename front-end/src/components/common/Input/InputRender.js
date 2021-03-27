import React from 'react';
import { Field } from 'redux-form';

export default function Input({ type, name, size, disabled, ...props }) {
  return (
    <Field
      type={type ? type : 'text'}
      name={name}
      component="input"
      className={[
        'input',
        `input--${size ? size : 'medium'}`,
        disabled ? 'input--disabled' : null,
      ].join(' ')}
      {...props}
    />
  );
}
