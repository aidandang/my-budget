import React, { useState } from 'react';
import './month.css';

const Dropdown = ({ list, selected }) => {
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
    <>
      <div className="month">
        <div className="month__title-box">
          <div className="month__month-box">
            <span>May</span> <span className="month__year">2021</span>{' '}
            <span
              className="month__icon"
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
          <div className="month__title">BUDGETS</div>
        </div>

        {trigger.isListOpen && list.length > 0 && (
          <div className="month__list">
            {list.map((item, index) => (
              <div className="month__item-box" key={index}>
                <span
                  className={`${
                    index === selected
                      ? 'month__selected'
                      : 'month__not-selected'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    selectItem(index);
                  }}
                >
                  {item.month} {item.year}
                </span>
                {index !== list.length - 1 && (
                  <span className="month__space">|</span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export const Month = ({ data, selected }) => {
  return <Dropdown list={data} selected={selected} />;
};
