import React from 'react';

export const Button = ({
  mode,
  size,
  otherStyle,
  disabled,
  children,
  ...props
}) => {
  return (
    <button
      type="button"
      className={[
        'button',
        `button--${size ? size : 'medium'}`,
        `button--${mode ? mode : 'primary'}`,
        `${disabled ? 'button--disabled' : null}`,
        otherStyle ? otherStyle : null,
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
};
