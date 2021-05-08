import React from 'react';
import './select.css';

export const Select = ({ label }) => {
  return (
    <div className="select">
      <label className="select__label" htmlFor="select">
        {label}
      </label>
      <select className="select__select" name="select">
        <option value=""></option>
        <option value="Internet Service">Internet Service</option>
        <option value="Clothes">Clothes</option>
        <option value="Home Insurance">Home Insurance</option>
        <option value="Child Support">Child Support</option>
      </select>
    </div>
  );
};
