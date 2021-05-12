import React from 'react';

export default function Button({
  mode,
  size,
  label,
  fullwidth,
  children,
  ...props
}) {
  return (
    <button
      type="button"
      className={[
        'button',
        `button--${size ? size : 'medium'}`,
        `button--${mode ? mode : 'primary'}`,
        `button--${fullwidth ? 'fullwidth' : 'width'}`,
      ].join(' ')}
      {...props}
    >
      {label ? label : children}
    </button>
  );
}
