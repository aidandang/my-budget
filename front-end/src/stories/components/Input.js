import React from 'react';

export const Input = ({
  type,
  id,
  size,
  otherStyle,
  label,
  disabled,
  ...props
}) => {
  return (
    <>
      <label className={`input-label input--${size ? size : 'medium'}`}>
        {label ? label : null}
        <input
          type={type ? type : 'text'}
          id={id ? id : 'sample-input-id'}
          className={[
            'input',
            `input--${size ? size : 'medium'}`,
            otherStyle ? otherStyle : null,
            disabled ? 'input--disabled' : null,
          ].join(' ')}
          {...props}
        />
      </label>
    </>
  );
};
