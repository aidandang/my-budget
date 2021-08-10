import React, { useState } from 'react';

const PageTitle = ({
  leftTitle,
  list,
  selected,
  setSelected,
  rightTitle,
  isBudgets,
}) => {
  const [trigger, setTrigger] = useState({
    isListOpen: false,
  });

  const toggleList = () => {
    setTrigger((prevState) => ({
      ...prevState,
      isListOpen: !prevState.isListOpen,
    }));
  };

  return (
    <div className="pagetitle">
      <div className="pagetitle__title-box">
        <div className="pagetitle__left-title">
          <span>{leftTitle.first}</span>{' '}
          <span className="pagetitle__year">{leftTitle.second}</span>{' '}
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
        <div className="pagetitle__right-title">
          {isBudgets && (
            <span className="pagetitle__icon pagetitle__space">
              <i className="fas fa-plus-circle"></i>
            </span>
          )}

          {rightTitle ? rightTitle : ''}
        </div>
      </div>

      {trigger.isListOpen && list.length > 0 && (
        <div className="pagetitle__list">
          {list.map((item, index) => (
            <div className="pagetitle__item-box" key={index}>
              <span
                className={`${
                  item.name === selected.name
                    ? 'pagetitle__selected'
                    : 'pagetitle__not-selected'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setTrigger((prevState) => ({
                    ...prevState,
                    isListOpen: false,
                  }));
                  setSelected(selected);
                }}
              >
                {item.name}
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

export default PageTitle;
