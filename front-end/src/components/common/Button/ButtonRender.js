import React from 'react';

export default function Button({
  mode,
  size,
  otherStyle,
  disabled,
  children,
  ...props
}) {
  return (
    <button
      type="submit"
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
}
