import React from 'react';

import { Container } from './Container';
import { Month } from './Month';
import { Input } from './Input';
import { Button } from './Button';
import { Table, Tr, Th, Td } from './Table';
import './budgets.css';

export const Budgets = ({ user, data, selected, title }) => (
  <Container user={user}>
    <div className="budgets">
      <Month data={data} selected={selected} title={title} />

      <hr className="separator separator--light" />
      <p className="budgets__note">
        HOW TO USE: Enter your budget for each category in the Summary By
        Category table below. Enter transactions on the Transactions sheet to
        see how your actual spending compares to your budget.
      </p>
      <hr className="separator separator--bold" />
      <div className="space--small">&nbsp;</div>
      <div className="budgets__headline">Cash Flow Report</div>
      <div className="budgets__cashflow">
        <Table>
          <Tr>
            <Th>Account</Th>
            <Th align={'right'}>Projected</Th>
            <Th align={'right'} last={true}>
              Actual
            </Th>
          </Tr>
          <Tr>
            <Td>Income</Td>
            <Td align={'right'}>$3,600.00</Td>
            <Td align={'right'} last={true}>
              $3,800.00
            </Td>
          </Tr>
          <Tr>
            <Td border={'double'}>Expense</Td>
            <Td align={'right'} border={'double'}>
              $3,500.00
            </Td>
            <Td align={'right'} border={'double'} last={true}>
              $3,500.00
            </Td>
          </Tr>
          <Tr>
            <Th border={'none'}>Difference</Th>
            <Th align={'right'} border={'none'}>
              $100.00
            </Th>
            <Th align={'right'} border={'none'} last={true}>
              $300.00
            </Th>
          </Tr>
        </Table>
      </div>
      <div className="budgets__headline">Summary by Category</div>
      <div className="budgets__category">
        <Table>
          <Tr>
            <Th border={'none'}>GIVING</Th>
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
              <a href="/">Add item</a>
            </Th>
            <Th align={'right'} border={'none'} last={true}>
              Total: $300.00
            </Th>
          </Tr>
        </Table>
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
              <a href="/">Add item</a>
            </Th>
            <Th align={'right'} border={'none'} last={true}>
              Total: $300.00
            </Th>
          </Tr>
          <Tr>
            <Td border={'none'} last={true} colSpan="4">
              <div>
                <Input type="text" label="Account" />
              </div>
              <div className="budgets__button">
                <Button label="Save" />
                <span className="transactions__button--space">&nbsp;</span>
                <Button
                  label="Cancel"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                />
              </div>
            </Td>
          </Tr>
        </Table>
      </div>
    </div>
  </Container>
);

export default Budgets;
