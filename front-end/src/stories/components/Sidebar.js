import React, { useState } from 'react';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleContentClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div
      id="container"
      className={`container ${isOpen ? 'menu-effect menu-open' : null}`}
    >
      <nav className="menu menu-effect" id="menu-1">
        <ul>
          <li>
            <a href="/dashboard" className="navigation__link">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/budgets" className="navigation__link">
              Budgets
            </a>
          </li>
          <li>
            <a href="/transations" className="navigation__link">
              Transactions
            </a>
          </li>
          <li>
            <a href="/about" className="navigation__link">
              About
            </a>
          </li>
          <li>
            <a href="https://aidandang.com" className="navigation__link">
              Portfolio
            </a>
          </li>
        </ul>
      </nav>

      <div className="pusher" onClick={handleContentClick}>
        <div className="content">
          {/* <!-- this is the wrapper for the content --> */}
          <div className="content-inner">
            {/* <!-- extra div for emulating position:fixed of the menu --> */}
            {/* <!-- Top Navigation --> */}
            <button name="menu-effect" onClick={toggle}>
              Slide in on top
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
