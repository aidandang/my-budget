import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withRequiredAuth from '../../common/HOC/withRequiredAuth';
import CrudAccountForm from './CrudAccountForm';
import MonthYearForm from './MonthYearForm';

import { PageTitle } from '../../common/PageTitle';
import { Note } from '../../common/Note';
import { Card, Row, Col } from '../../common/Card';
import { Button } from '../../common/Button';

import { connect } from 'react-redux';
import * as actions from '../../../state/actions';

const rightTitle = 'Add Budget';
const noteContent = `HOW TO USE: Select the default or a custom template to create a monthly budget. Choose each category to enter budgets for accounts in it. Add a new account if needed.`;

class AddBudgetContainer extends Component {
  state = {
    selected: 0,
    isEdit: false,
    id: '',
  };

  onSubmit = (props) => {};

  setSelected = (index) => {
    this.setState((prevState) => ({
      ...prevState,
      selected: index,
    }));
  };

  onAccountClick = (id) => {
    this.setState((prevState) => ({
      ...prevState,
      isEdit: id ? true : false,
      id: id ? id : '',
    }));
  };

  closeForm = () => {
    this.setState((prevState) => ({
      ...prevState,
      isEdit: false,
      id: '',
    }));
  };

  calBudgetTotal = (budget) => {
    const total = budget.reduce((acc, val) => {
      if (val._id !== 'INCOMES') {
        return acc + val.total;
      } else {
        return acc;
      }
    }, 0);

    return total;
  };

  calCategoryTotal = (accounts) => {
    const total = accounts.reduce((acc, val) => acc + Number(val.value), 0);

    if (total > 0) {
      return total.toFixed(2);
    }

    return total;
  };

  componentDidMount() {
    this.props.getBudgetTemplates('/users/get-budget-templates');
  }

  render() {
    const { templates } = this.props;

    return (
      <div className="add-budget">
        <div className="space--medium">&nbsp;</div>

        <PageTitle
          leftTitle={{
            first: templates[this.state.selected].name,
            second: 'Template',
          }}
          list={templates}
          selected={this.state.selected}
          setSelected={this.setSelected}
          rightTitle={rightTitle}
        />

        <div className="space--small">&nbsp;</div>

        <Note content={noteContent} />

        <div className="space--medium">&nbsp;</div>

        <MonthYearForm />

        <div className="space--medium">&nbsp;</div>

        <Card>
          <Row header={true} border={true}>
            <Col></Col>
            <Col right={true}>Planning</Col>
          </Row>
          <Row bold={true}>
            <Col>Total Budget</Col>
            <Col right={true}>
              {templates[this.state.selected].value &&
                `$${this.calBudgetTotal(templates[this.state.selected].value)}`}
            </Col>
          </Row>
        </Card>

        <div className="space--medium">&nbsp;</div>

        <div className="headline">Summary by Category</div>

        {templates[this.state.selected].budget.map((cat, catIndex) => (
          <div key={cat._id}>
            <div className="space--medium">&nbsp;</div>
            <Card>
              <Row header={true}>
                <Col>{cat._id}</Col>
                <Col right={true}>Planning</Col>
              </Row>
              {cat.accounts.map((acc, accIndex) => (
                <div key={acc._id}>
                  <Row
                    border={true}
                    last={cat.accounts.length - 1 === accIndex ? true : false}
                  >
                    <Col>
                      {acc.name}{' '}
                      {this.state.isEdit && this.state.id === acc._id ? (
                        <a
                          href="/"
                          onClick={(e) => {
                            e.preventDefault();
                            this.onAccountClick('');
                          }}
                        >
                          <i className="fas fa-chevron-circle-up"></i>
                        </a>
                      ) : (
                        <a
                          href="/"
                          onClick={(e) => {
                            e.preventDefault();
                            if (!this.state.isEdit) {
                              this.onAccountClick(acc._id);
                            }
                          }}
                        >
                          <i className="fas fa-chevron-circle-down"></i>
                        </a>
                      )}
                    </Col>
                    <Col right={true}>{`$${acc.value}`}</Col>
                  </Row>
                  {this.state.isEdit && this.state.id === acc._id && (
                    <>
                      <div className="space--small">&nbsp;</div>

                      <Row>
                        <Col>
                          <CrudAccountForm
                            accountName={acc.name}
                            accountBudget={acc.value}
                            selectedTemplate={this.state.selected}
                            selectedCategory={catIndex}
                            selectedAccount={accIndex}
                            closeForm={this.closeForm}
                            buttonText={'Remove'}
                          />
                        </Col>
                      </Row>

                      <div className="space--small">&nbsp;</div>
                    </>
                  )}
                </div>
              ))}
              <Row bold={true}>
                <Col>
                  {this.state.isEdit && this.state.id === cat._id ? (
                    <a
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState((prevState) => ({
                          ...prevState,
                          isEdit: false,
                          id: '',
                        }));
                      }}
                    >
                      Add Account
                    </a>
                  ) : (
                    <a
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState((prevState) => ({
                          ...prevState,
                          isEdit: true,
                          id: cat._id,
                        }));
                      }}
                    >
                      Add Account
                    </a>
                  )}
                </Col>
                <Col right="true">
                  Total: {`$${this.calCategoryTotal(cat.accounts)}`}
                </Col>
              </Row>
              {this.state.isEdit && this.state.id === cat._id && (
                <Row>
                  <Col>
                    <CrudAccountForm
                      accountName={''}
                      accountBudget={0}
                      selectedTemplate={this.state.selected}
                      selectedCategory={catIndex}
                      selectedAccount={-1}
                      closeForm={this.closeForm}
                    />
                  </Col>
                </Row>
              )}
            </Card>
          </div>
        ))}

        <div className="space--large">&nbsp;</div>
        <div>
          <Button
            type={'submit'}
            size={'large'}
            onClick={(e) => {
              e.preventDefault();
              this.onSubmit();
            }}
          >
            Add Budget
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  budgets: state.user.budgets,
  templates: state.user.templates,
  errorMessage: state.user.errorMessage,
});

AddBudgetContainer.propTypes = {
  templates: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      budgets: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string.isRequired,
          accounts: PropTypes.arrayOf(
            PropTypes.shape({
              _id: PropTypes.string.isRequired,
              name: PropTypes.string.isRequired,
              category: PropTypes.string.isRequired,
              value: PropTypes.number.isRequired,
            })
          ),
          total: PropTypes.number.isRequired,
        })
      ),
    })
  ).isRequired,
  getBudgetTemplates: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  actions
)(withRequiredAuth(AddBudgetContainer));
