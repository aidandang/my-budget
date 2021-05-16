import React from 'react';

import { Container } from './Container';
import { Input } from './Form';
import { Table, Tr, Th, Td } from './Table';
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
        <div>
          <Input type="month" label="Month" />
        </div>
        <div className="space--medium">&nbsp;</div>
        <div>
          <Table>
            <Tr>
              <Th last={true}></Th>
              <Th align={'right'} last={true}>
                <span className="budgets__tab">Planning</span>
              </Th>
            </Tr>
            <Tr>
              <Th border={'none'}>Total Budget</Th>
              <Th align={'right'} border={'none'} last={true}>
                $3,800.00
              </Th>
            </Tr>
          </Table>
        </div>
        <div className="space--medium">&nbsp;</div>
        <div className="budgets__headline">Summary by Category</div>
        <div>
          <Table>
            <Tr>
              <Th border={'none'}>SAVING</Th>
              <Th align={'right'} border={'none'} last={true}>
                <span className="budgets__tab">Planning</span>
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
                  Add Account
                </a>
              </Th>
              <Th align={'right'} border={'none'} last={true}>
                Total: $300.00
              </Th>
            </Tr>
          </Table>
        </div>
        <div className="space--medium">&nbsp;</div>
        <hr className="separator separator--light" />
        <div className="space--medium">&nbsp;</div>
        <div className="budgets__button">
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
