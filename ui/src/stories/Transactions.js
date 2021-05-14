import React from 'react';

import { Container } from './Container';
import { Note } from './Note';
import { Month } from './Month';
import { Input, Select } from './Form';
import { Button } from './Button';
import { Table, Tr, Th, Td } from './Table';
import './transactions.css';

const noteContent = `HOW TO USE: Enter your information into the Transactions table below.
Choose a category for each transaction, then check the Budget sheet to
see how each category compares with your budget.`;

const AddItem = () => {
  return (
    <>
      <Tr>
        <Td border={'none'} last={true} colSpan="4">
          <div className="space--small">&nbsp;</div>
          <div>
            <Input type="date" label="Date" />
          </div>
          <div className="space--small">&nbsp;</div>
          <div>
            <Input type="text" label="Description" />
          </div>
          <div className="space--small">&nbsp;</div>
          <div>
            <Select label="Category" />
          </div>
          <div className="space--small">&nbsp;</div>
          <div>
            <Input type="number" label="Amount" placeholder="0.00" />
          </div>
          <div className="space--medium">&nbsp;</div>
          <div className="transactions__button">
            <Button
              label="Save"
              onClick={(e) => {
                e.preventDefault();
              }}
            />
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
    </>
  );
};

const EditItem = () => {
  return (
    <>
      <Tr>
        <Td border={'none'} last={true} colSpan="4">
          <div className="space--small">&nbsp;</div>
          <div>
            <Input type="date" label="Date" />
          </div>
          <div className="space--small">&nbsp;</div>
          <div>
            <Input type="text" label="Description" />
          </div>
          <div className="space--small">&nbsp;</div>
          <div>
            <Select label="Category" />
          </div>
          <div className="space--small">&nbsp;</div>
          <div>
            <Input type="number" label="Amount" placeholder="0.00" />
          </div>

          <div className="space--medium">&nbsp;</div>

          <div className="transactions__button">
            <Button
              label="Save"
              onClick={(e) => {
                e.preventDefault();
              }}
            />
            <span className="transactions__button--space">&nbsp;</span>
            <Button
              label="Cancel"
              onClick={(e) => {
                e.preventDefault();
              }}
            />
          </div>

          <div className="space--medium">&nbsp;</div>
        </Td>
      </Tr>
    </>
  );
};

export const Transactions = ({
  user,
  isAddItem,
  isEditItem,
  data,
  selected,
  title,
}) => {
  return (
    <Container user={user}>
      <div className="transactions">
        <h1 className="hidden-title space--medium">Transactions</h1>

        <Month data={data} selected={selected} title={title} />

        <div className="space--small">&nbsp;</div>

        <Note content={noteContent} />

        <div className="space--medium">&nbsp;</div>

        <div className="transactions__headline">Transaction Table</div>

        <div>
          <Table>
            <Tr>
              <Th>Date</Th>
              <Th>Desciption</Th>
              <Th>Category</Th>
              <Th align={'right'} last={true}>
                Amount
              </Th>
            </Tr>

            {!isEditItem ? (
              <Tr
                className="transactions__row"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <Td>05/07/2021</Td>
                <Td>
                  SolCalGas #283338892 SolCalGas #283338892 SolCalGas #283338892
                </Td>
                <Td>Water Water Water</Td>
                <Td align={'right'} last={true}>
                  $15.00
                </Td>
              </Tr>
            ) : (
              <EditItem />
            )}

            <Tr
              className="transactions__row"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <Td>05/07/2021</Td>
              <Td>SolCalGas #283338892</Td>
              <Td>Water</Td>
              <Td align={'right'} last={true}>
                $15.00
              </Td>
            </Tr>
            <Tr>
              <Th border={'none'} colSpan="4">
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Add item
                </a>
              </Th>
            </Tr>
            {isAddItem && <AddItem />}
          </Table>
        </div>
      </div>
    </Container>
  );
};

export default Transactions;
