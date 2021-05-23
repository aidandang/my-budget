import React from 'react';

export default function Button({
  mode,
  size,
  otherStyle,
  disabled,
  fullwidth,
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
        `button--${fullwidth ? 'fullwidth' : 'width'}`,
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
}
