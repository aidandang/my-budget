import React from 'react';

export const Button = ({
  primary,
  backgroundColor,
  size,
  children,
  otherStyle,
  ...props
}) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  return (
    <button
      type="button"
      className={[
        'button',
        `button--${size}`,
        mode,
        otherStyle ? otherStyle : null,
      ].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {children}
    </button>
  );
};
