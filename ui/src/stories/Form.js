import React from 'react';
import './form.css';

export const Input = ({ type, label, placeholder, ...props }) => {
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
        {...props}
      />
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

export const Form = ({ isSelect, ...props }) => {
  return <form>{isSelect ? <Select {...props} /> : <Input {...props} />}</form>;
};
