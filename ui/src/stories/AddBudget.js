import React from 'react';

import { Container } from './Container';
import { Input } from './Form';
import { Table, Tr, Th, Td } from './Table';
import { PageTitle } from './PageTitle';

export const AddBudget = ({ user, data, selected, lefttitle, title }) => {
  return (
    <Container user={user}>
      <div className="add-budget">
        <div className="space--medium">&nbsp;</div>

        <PageTitle
          data={data}
          selected={selected}
          lefttitle={lefttitle}
          title={title}
        />

        <div className="space--small">&nbsp;</div>

        <hr className="separator separator--light" />

        <p className="budgets__note">
          HOW TO USE: Enter your budget for each category in the Summary By
          Category table below. Enter transactions on the Transactions sheet to
          see how your actual spending compares to your budget.
        </p>

        <hr className="separator separator--bold" />

        <div className="space--medium">&nbsp;</div>
        <div>
          <Input type="month" label="Month" />
        </div>
        <div className="space--medium">&nbsp;</div>
        <div>
          <Table>
            <Tr>
              <Th border={'none'}>SAVING</Th>
              <Th align={'right'} border={'none'} last={true}>
                <span className="budgets__tab">
                  <a href="/">Planning</a>
                </span>
                <span className="budgets__tab">|</span>
                <span className="budgets__tab">Spent</span>
                <span className="budgets__tab">|</span>
                <span className="budgets__tab">
                  <a href="/">Difference</a>
                </span>
              </Th>
            </Tr>
            <Tr>
              <Td>Emergency Fund</Td>
              <Td align={'right'} last={true}>
                $3,800.00
              </Td>
            </Tr>
            <Tr>
              <Td border={'double'}>Retirement Fund</Td>
              <Td align={'right'} border={'double'} last={true}>
                $3,500.00
              </Td>
            </Tr>
            <Tr>
              <Th border={'none'}>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Add item
                </a>
              </Th>
              <Th align={'right'} border={'none'} last={true}>
                Total: $300.00
              </Th>
            </Tr>
          </Table>
        </div>
      </div>
    </Container>
  );
};

export default AddBudget;
