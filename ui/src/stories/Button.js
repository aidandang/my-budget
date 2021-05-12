import React from 'react';
import './button.css';

export const Button = ({
  option,
  size,
  label,
  fullwidth,
  children,
  ...props
}) => {
  return (
    <button
      type="button"
      className={[
        'button',
        `button--${size ? size : 'medium'}`,
        `button--${option ? option : 'primary'}`,
        `button--${fullwidth ? 'fullwidth' : 'width'}`,
      ].join(' ')}
      {...props}
    >
      {label ? label : children}
    </button>
  );
};
