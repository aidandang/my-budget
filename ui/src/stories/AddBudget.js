import React from 'react';

import { Container } from './Container';
import { Input } from './Form';
import { Card, Row, Col } from './Card';
import { PageTitle } from './PageTitle';
import { Note } from './Note';
import { Button } from './Button';

const noteContent = `HOW TO USE: Select the default or a custom template to create a monthly budget. Choose a category to enter a budget for each account in it. Add a new account if needed.`;

const titleList = [
  {
    id: 0,
    first: 'Default',
  },
  {
    id: 0,
    first: '2021050101',
  },
  {
    id: 0,
    first: '2021050102',
  },
];

const rightTitle = 'Add Budget';
const selected = 0;

export const AddBudget = ({ user }) => {
  return (
    <Container user={user}>
      <div className="add-budget">
        <div className="space--medium">&nbsp;</div>

        <PageTitle
          list={titleList}
          selected={selected}
          rightTitle={rightTitle}
        />

        <div className="space--small">&nbsp;</div>

        <Note content={noteContent} />

        <div className="space--medium">&nbsp;</div>

        <Input type="month" label="Month" />

        <div className="space--small">&nbsp;</div>

        <Card>
          <Row header={true} border={true}>
            <Col></Col>
            <Col>Planning</Col>
          </Row>

          <Row bold={true}>
            <Col>Total Budget</Col>
            <Col>$3,800.00</Col>
          </Row>
        </Card>

        <div className="space--medium">&nbsp;</div>

        <div className="budgets__headline">Summary by Category</div>

        <div className="space--medium">&nbsp;</div>

        <Card>
          <Row header={true}>
            <Col>SAVING</Col>
            <Col>Planning</Col>
          </Row>
          <Row border={true}>
            <Col>Emergency Fund</Col>
            <Col>$3,800.00</Col>
          </Row>
          <Row border={true}>
            <Col>Retirement Fund</Col>
            <Col>$0.00</Col>
          </Row>
          <Row bold={true}>
            <Col>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Add Account
              </a>
            </Col>
            <Col>Total: $3,800.00</Col>
          </Row>
        </Card>

        <div className="space--large">&nbsp;</div>

        <hr className="separator separator--bold" />

        <div className="space--medium">&nbsp;</div>

        <div>
          <Button
            label="Add Budget"
            onClick={(e) => {
              e.preventDefault();
            }}
          />
          <span className="budgets__button--space">&nbsp;</span>
          <Button
            label="Reset"
            onClick={(e) => {
              e.preventDefault();
            }}
          />
        </div>
      </div>
    </Container>
  );
};

export default AddBudget;
