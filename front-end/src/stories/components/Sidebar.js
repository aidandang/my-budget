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
      id="st-container"
      className={`st-container ${isOpen ? 'st-effect-1 st-menu-open' : null}`}
    >
      <nav className="st-menu st-effect-1" id="menu-1">
        <h2 className="icon icon-lab">Sidebar</h2>
        <ul>
          <li>
            <a className="icon icon-data" href="/">
              Data Management
            </a>
          </li>
          <li>
            <a className="icon icon-location" href="/">
              Location
            </a>
          </li>
          <li>
            <a className="icon icon-study" href="/">
              Study
            </a>
          </li>
          <li>
            <a className="icon icon-photo" href="/">
              Collections
            </a>
          </li>
          <li>
            <a className="icon icon-wallet" href="/">
              Credits
            </a>
          </li>
        </ul>
      </nav>

      <div className="st-pusher" onClick={handleContentClick}>
        <div className="st-content">
          {/* <!-- this is the wrapper for the content --> */}
          <div className="st-content-inner">
            {/* <!-- extra div for emulating position:fixed of the menu --> */}
            {/* <!-- Top Navigation --> */}
            <header className="codrops-header">
              <h1>
                Sidebar Transitions{' '}
                <span>Transition effects for off-canvas views</span>
              </h1>
            </header>
            <div className="main clearfix">
              <div id="st-trigger-effects" className="column">
                <button name="st-effect-1" onClick={toggle}>
                  Slide in on top
                </button>
              </div>
              <div className="column">
                <p>
                  Sidebar menus or off-canvas navigations can be revealed in
                  many creative ways.
                </p>
                <p>
                  Here is some inspiration for showing them in style using CSS
                  transitions.
                </p>
              </div>
            </div>
            {/* <!-- /main --> */}
          </div>
          {/* <!-- /st-content-inner --> */}
        </div>
        {/* <!-- /st-content --> */}
      </div>
    </div>
  );
};
