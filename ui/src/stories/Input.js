import React from 'react';
import './input.css';

export const Input = ({ type, label, placeholder }) => {
  return (
    <div className="input">
      <label htmlFor="name" className="input__label">
        {label}
      </label>
      <input
        name="name"
        className="input__text"
        type={`${type ? type : 'text'}`}
        placeholder={placeholder ? placeholder : null}
      />
    </div>
  );
};
