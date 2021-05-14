import React, { useState } from 'react';

import './pagetitle.css';

const Dropdown = ({ list, selected, lefttitle, month, title, isBudgets }) => {
  const [trigger, setTrigger] = useState({
    isListOpen: false,
    selected,
  });

  const toggleList = () => {
    setTrigger((prevState) => ({
      ...prevState,
      isListOpen: !prevState.isListOpen,
    }));
  };

  const selectItem = (index) => {
    setTrigger((prevState) => ({
      ...prevState,
      isListOpen: false,
      selected: index,
    }));
  };

  return (
    <div className="pagetitle">
      <div className="pagetitle__title-box">
        <div className="pagetitle__pagetitle-box">
          <span>{lefttitle}</span>{' '}
          {month && <span className="pagetitle__year">2021</span>}{' '}
          <span
            className="pagetitle__icon"
            onClick={(e) => {
              e.preventDefault();
              toggleList();
            }}
          >
            {trigger.isListOpen ? (
              <i className="fas fa-angle-up"></i>
            ) : (
              <i className="fas fa-angle-down"></i>
            )}
          </span>
        </div>
        <div className="pagetitle__title">
          {isBudgets && (
            <span className="pagetitle__icon pagetitle__space">
              <i className="fas fa-plus-circle"></i>
            </span>
          )}

          {title}
        </div>
      </div>

      {trigger.isListOpen && list.length > 0 && (
        <div className="pagetitle__list">
          {list.map((item, index) => (
            <div className="pagetitle__item-box" key={index}>
              <span
                className={`${
                  index === selected
                    ? 'pagetitle__selected'
                    : 'pagetitle__not-selected'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  selectItem(index);
                }}
              >
                {item.month} {item.year}
              </span>
              {index !== list.length - 1 && (
                <span className="pagetitle__space">|</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const PageTitle = ({
  data,
  selected,
  lefttitle,
  month,
  title,
  isBudgets,
}) => {
  return (
    <Dropdown
      list={data}
      selected={selected}
      lefttitle={lefttitle}
      month={month}
      title={title}
      isBudgets={isBudgets}
    />
  );
};
