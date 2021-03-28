import React from 'react';

export const Input = ({
  col,
  label,
  placeholder,
  size,
  type,
  touched,
  error,
  warning,
}) => {
  return (
    <div className={col ? `input-box--${col}` : 'input-box--four'}>
      <label className={`input-label--${size ? size : 'medium'}`}>
        {label ? label : 'Primary'}
      </label>
      <input
        placeholder={placeholder ? placeholder : null}
        type={type}
        className={['input', `input--${size ? size : 'medium'}`].join(' ')}
      />
      {touched &&
        ((error && <span className="input-error">{error}</span>) ||
          (warning && <span className="input-warning">{warning}</span>))}
    </div>
  );
};
