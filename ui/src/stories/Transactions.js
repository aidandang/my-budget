import React from 'react';

import { Container } from './Container';
import { Month } from './Month';
import './transactions.css';

export const Transactions = ({ user, data, selected, title }) => (
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
        <table className="transactions__cashflow__table">
          <tr>
            <th className="transactions__cashflow__td">Date</th>
            <th className="transactions__cashflow__td">Desciption</th>
            <th className="transactions__cashflow__td">Category</th>
            <th className="transactions__cashflow__td transactions__cashflow__td--right">
              Amount
            </th>
          </tr>
          <tr>
            <td className="transactions__cashflow__td">05/07/2021</td>
            <td className="transactions__cashflow__td">
              SolCalGas #283338892 SolCalGas #283338892 SolCalGas #283338892
            </td>
            <td className="transactions__cashflow__td">Water Water Water</td>
            <td className="transactions__cashflow__td transactions__cashflow__td--right">
              $15.00
            </td>
          </tr>
          <tr>
            <td className="transactions__cashflow__td">05/07/2021</td>
            <td className="transactions__cashflow__td">SolCalGas #283338892</td>
            <td className="transactions__cashflow__td">Water</td>
            <td className="transactions__cashflow__td transactions__cashflow__td--right">
              $15.00
            </td>
          </tr>
          <tr>
            <th
              className="transactions__category__td transactions__category__td--bottom"
              colSpan="4"
            >
              <a href="/">Add item</a>
            </th>
          </tr>
        </table>
      </div>
    </div>
  </Container>
);

export default Transactions;
