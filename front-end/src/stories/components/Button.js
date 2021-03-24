import React from 'react';

export const Button = ({ mode, size, otherStyle, children, ...props }) => {
  return (
    <button
      type="button"
      className={[
        'button',
        `button--${size ? size : 'medium'}`,
        `button--${mode ? mode : 'primary'}`,
        otherStyle ? otherStyle : null,
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
};
