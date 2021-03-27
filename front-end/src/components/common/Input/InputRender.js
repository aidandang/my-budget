import React from 'react';

export default function Input({
  input,
  label,
  placeholder,
  size,
  type,
  meta: { touched, error, warning },
}) {
  return (
    <div className="input-box">
      <label className={`input-label--${size}`}>{label}</label>
      <input
        {...input}
        placeholder={placeholder ? placeholder : null}
        type={type}
        className={['input', `input--${size ? size : 'medium'}`].join(' ')}
      />
      {touched &&
        ((error && <span className="input-error">{error}</span>) ||
          (warning && <span className="input-warning">{warning}</span>))}
    </div>
  );
}
