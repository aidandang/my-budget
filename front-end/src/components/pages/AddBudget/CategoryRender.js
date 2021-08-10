import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AccountForm from './AccountForm';

import { Card, Row, Col } from '../../common/Card';

import { connect } from 'react-redux';

const CategoryRender = ({ selectedTemplate, category, templates }) => {
  const [edit, setEdit] = useState('');

  const onAccountClick = (id) => {
    setEdit(id ? id : '');
  };

  const calCategoryTotal = () => {
    const total = templates[selectedTemplate].budget.reduce((acc, el) => {
      if (el.category === category) {
        return acc + Number(el.value);
      } else {
        return acc;
      }
    }, 0);

    return total ? total.toFixed(2) : '0';
  };

  const closeForm = () => {
    setEdit('');
  };

  return (
    <>
      <div className="space--medium">&nbsp;</div>
      <Card>
        <Row header={true}>
          <Col>{category}</Col>
          <Col right={true}>Planning</Col>
        </Row>
        {templates[selectedTemplate].budget
          .filter((el) => el.category === category)
          .map((acc, index) => (
            <div key={acc._id}>
              <Row
                border={true}
                last={
                  templates[selectedTemplate].budget.length - 1 === index
                    ? true
                    : false
                }
              >
                <Col>
                  {acc.name}{' '}
                  {edit === acc._id ? (
                    <a
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                        onAccountClick('');
                      }}
                    >
                      <i className="fas fa-chevron-circle-up"></i>
                    </a>
                  ) : (
                    <a
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                        if (!edit) {
                          onAccountClick(acc._id);
                        }
                      }}
                    >
                      <i className="fas fa-chevron-circle-down"></i>
                    </a>
                  )}
                </Col>
                <Col right={true}>{`$${acc.value}`}</Col>
              </Row>
              {edit === acc._id && (
                <>
                  <div className="space--small">&nbsp;</div>

                  <Row>
                    <Col>
                      <AccountForm
                        accountName={acc.name}
                        accountBudget={acc.value}
                        selectedTemplate={selectedTemplate}
                        selectedAccount={acc._id}
                        closeForm={closeForm}
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
            {edit === category ? (
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onAccountClick('');
                }}
              >
                Add Account
              </a>
            ) : (
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  if (!edit) {
                    onAccountClick(category);
                  }
                }}
              >
                Add Account
              </a>
            )}
          </Col>
          <Col right="true">Total: {`$${calCategoryTotal()}`}</Col>
        </Row>
        {edit === category && (
          <Row>
            <Col>
              <AccountForm
                accountName={''}
                accountBudget={'0'}
                selectedTemplate={selectedTemplate}
                selectedCategory={category}
                closeForm={closeForm}
              />
            </Col>
          </Row>
        )}
      </Card>
    </>
  );
};

const mapStateToProps = (state) => ({
  templates: state.user.templates,
});

CategoryRender.propTypes = {
  selectedTemplate: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  templates: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      budget: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          category: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
};

export default connect(mapStateToProps)(CategoryRender);
