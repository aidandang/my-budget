import React, { Component } from 'react';
import { Header } from '../Header';
import { Switch, Route } from 'react-router-dom';
import { LandingPage } from '../../pages/Landing';
import { NotFoundPage } from '../../pages/NotFound';
import { DashboardPage } from '../../pages/Dashboard';
import { SignInPage } from '../../pages/SignIn';
import { SignUpPage } from '../../pages/SignUp';

class Container extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    if (this.state.isOpen) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }

    this.setState((prevState) => ({
      ...prevState,
      isOpen: !this.state.isOpen,
    }));
  };

  handleContentClick = () => {
    if (this.state.isOpen) {
      document.body.style.overflow = 'auto';
      this.setState((prevState) => ({
        ...prevState,
        isOpen: false,
      }));
    }
  };

  render() {
    return (
      <div
        id="container"
        className={`container ${
          this.state.isOpen ? 'menu-effect menu-open' : null
        }`}
      >
        <nav className="menu menu-effect" id="menu-1">
          <span
            className="menu__close"
            onClick={(e) => {
              e.preventDefault();
              this.handleContentClick();
            }}
          >
            &nbsp;
          </span>
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

        <div
          className="pusher"
          onClick={(e) => {
            e.stopPropagation();
            this.handleContentClick();
          }}
        >
          <Header toggle={this.toggle} />
          <div className="content">
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/sign-in" exact component={SignInPage} />
              <Route path="/sign-up" exact component={SignUpPage} />
              <Route path="/dashboard" exact component={DashboardPage} />
              <Route path="/" component={NotFoundPage} />
            </Switch>

            {/* <button name="menu-effect" onClick={toggle}>
                Slide in on top
              </button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
