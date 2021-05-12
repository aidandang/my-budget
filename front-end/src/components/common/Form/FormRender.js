import React from 'react';

export const Input = ({
  input,
  type,
  label,
  placeholder,
  meta: { touched, error, warning },
  ...props
}) => {
  return (
    <div className="input">
      <label className="input__label">{label}</label>
      <input
        {...input}
        placeholder={placeholder ? placeholder : null}
        type={type}
        className="input__text"
        {...props}
      />
      {touched &&
        ((error && <span className="input-error">{error}</span>) ||
          (warning && <span className="input-warning">{warning}</span>))}
    </div>
  );
};

export const Select = ({ label }) => {
  return (
    <div className="input">
      <label className="input__label" htmlFor="select">
        {label}
      </label>
      <select className="input__text input__text--select" name="select">
        <option value=""></option>
        <option value="Internet Service">Internet Service</option>
        <option value="Clothes">Clothes</option>
        <option value="Home Insurance">Home Insurance</option>
        <option value="Child Support">Child Support</option>
      </select>
    </div>
  );
};

export const Form = ({ children, ...props }) => {
  return <form {...props}>{children}</form>;
};
