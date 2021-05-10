import React, { useState } from 'react';

import { Container } from './Container';
import { Month } from './Month';
import { Input } from './Input';
import { Select } from './Select';
import { Button } from './Button';
import { Table, Tr, Th, Td } from './Table';
import './transactions.css';

const AddItem = ({ setAddItemOpen }) => {
  return (
    <>
      <Tr>
        <Td border={'none'} last={true} colSpan="4">
          <div>
            <Input type="date" label="Date" />
          </div>
          <div>
            <Input type="text" label="Description" />
          </div>
          <div>
            <Select label="Category" />
          </div>
          <div>
            <Input type="number" label="Amount" placeholder="0.00" />
          </div>
          <div className="transactions__button">
            <Button label="Save" />
            <span className="transactions__button--space">&nbsp;</span>
            <Button
              label="Cancel"
              onClick={(e) => {
                e.preventDefault();
                setAddItemOpen(false);
              }}
            />
          </div>
        </Td>
      </Tr>
      ;
    </>
  );
};

const EditItem = ({ setEditItemOpen }) => {
  return (
    <>
      <Tr>
        <Td border={'none'} last={true} colSpan="4">
          <div>
            <Input type="date" label="Date" />
          </div>
          <div>
            <Input type="text" label="Description" />
          </div>
          <div>
            <Select label="Category" />
          </div>
          <div>
            <Input type="number" label="Amount" placeholder="0.00" />
          </div>
          <div className="transactions__button">
            <Button label="Save" />
            <span className="transactions__button--space">&nbsp;</span>
            <Button
              label="Cancel"
              onClick={(e) => {
                e.preventDefault();
                setEditItemOpen(false);
              }}
            />
          </div>
        </Td>
      </Tr>
      ;
    </>
  );
};

export const Transactions = ({ user, data, selected, title }) => {
  const [addItemOpen, setAddItemOpen] = useState(false);
  const [editItemOpen, setEditItemOpen] = useState(false);

  const addItem = () => {
    setAddItemOpen(!addItemOpen);
  };

  const editItem = (e) => {
    e.stopPropagation();
    setEditItemOpen(!editItemOpen);
  };

  return (
    <Container user={user}>
      <div className="transactions">
        <Month data={data} selected={selected} title={title} />

        <hr className="separator separator--light" />
        <p className="transactions__note">
          HOW TO USE: Enter your information into the Transactions table below.
          Choose a category for each transaction, then check the Budget sheet to
          see how each category compares with your budget.
        </p>
        <hr className="separator separator--bold" />
        <div className="space--small">&nbsp;</div>
        <div className="transactions__headline">Transaction Table</div>
        <div className="transactions__cashflow">
          <Table>
            <Tr>
              <Th>Date</Th>
              <Th>Desciption</Th>
              <Th>Category</Th>
              <Th align={'right'} last={true}>
                Amount
              </Th>
            </Tr>
            <Tr
              className="transactions__row"
              onClick={(e) => {
                editItem(e);
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

            {editItemOpen && <EditItem setEditItemOpen={setEditItemOpen} />}

            <Tr
              className="transactions__row"
              onClick={(e) => {
                editItem(e);
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
                    addItem();
                  }}
                >
                  Add item
                </a>
              </Th>
            </Tr>

            {addItemOpen && <AddItem setAddItemOpen={setAddItemOpen} />}
          </Table>
        </div>
      </div>
    </Container>
  );
};

export default Transactions;
