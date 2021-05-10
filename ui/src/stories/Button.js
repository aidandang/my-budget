import React from 'react';
import './button.css';

export const Button = ({ label, ...props }) => {
  return (
    <button
      type="button"
      className={['button', 'button--medium', 'button--primary'].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
