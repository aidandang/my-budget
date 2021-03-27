import React from 'react';

export const Input = ({
  type,
  size,
  label,
  otherStyle,
  disabled,
  ...props
}) => {
  return (
    <label className={`input-label input--${size ? size : 'medium'}`}>
      {label ? label : null}
      <input
        type={type ? type : 'text'}
        className={[
          'input',
          `input--${size ? size : 'medium'}`,
          otherStyle ? otherStyle : null,
          disabled ? 'input--disabled' : null,
        ].join(' ')}
        {...props}
      />
    </label>
  );
};
