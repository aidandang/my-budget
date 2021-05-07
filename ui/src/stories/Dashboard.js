import React from 'react';

import { Container } from './Container';
import { Month } from './Month';
import './dashboard.css';

export const Dashboard = ({ user, data, selected, title }) => (
  <Container user={user}>
    <div className="dashboard">
      <Month data={data} selected={selected} title={title} />

      <hr className="separator separator--light" />
      <p className="dashboard__note">
        HOW TO USE: Enter your budget for each category in the Summary By
        Category table below. Enter transactions on the Transactions sheet to
        see how your actual spending compares to your budget.
      </p>
      <hr className="separator separator--bold" />
      <div className="space--small">&nbsp;</div>
      <div className="dashboard__headline">Cash Flow Report</div>
      <div className="dashboard__cashflow">
        <table className="dashboard__cashflow__table">
          <tr>
            <th className="dashboard__cashflow__td">Account</th>
            <th className="dashboard__cashflow__td dashboard__cashflow__td--right">
              Projected
            </th>
            <th className="dashboard__cashflow__td dashboard__cashflow__td--right">
              Actual
            </th>
          </tr>
          <tr>
            <td className="dashboard__cashflow__td">Income</td>
            <td className="dashboard__cashflow__td dashboard__cashflow__td--right">
              $3,600.00
            </td>
            <td className="dashboard__cashflow__td dashboard__cashflow__td--right">
              $3,800.00
            </td>
          </tr>
          <tr>
            <td className="dashboard__cashflow__td dashboard__cashflow__td--border-double">
              Expense
            </td>
            <td className="dashboard__cashflow__td dashboard__cashflow__td--right dashboard__cashflow__td--border-double">
              $3,500.00
            </td>
            <td className="dashboard__cashflow__td dashboard__cashflow__td--right dashboard__cashflow__td--border-double">
              $3,500.00
            </td>
          </tr>
          <tr>
            <th className="dashboard__cashflow__td dashboard__cashflow__td--bottom">
              Difference
            </th>
            <th className="dashboard__cashflow__td dashboard__cashflow__td--right dashboard__cashflow__td--bottom">
              $100.00
            </th>
            <th className="dashboard__cashflow__td dashboard__cashflow__td--right dashboard__cashflow__td--bottom">
              $300.00
            </th>
          </tr>
        </table>
      </div>
      <div className="dashboard__headline">Summary by Category</div>
      <div className="dashboard__category">
        <table className="dashboard__category__table">
          <tr>
            <th className="dashboard__category__td dashboard__category__td--bottom">
              SAVING
            </th>
            <th className="dashboard__category__td dashboard__category__td--bottom dashboard__category__td--right">
              <span className="dashboard__tab">
                <a href="/">Planning</a>
              </span>
              <span className="dashboard__tab">|</span>
              <span className="dashboard__tab">Spent</span>
              <span className="dashboard__tab">|</span>
              <span className="dashboard__tab">
                <a href="/">Difference</a>
              </span>
            </th>
          </tr>
          <tr>
            <td className="dashboard__category__td">Emergency Fund</td>
            <td className="dashboard__category__td dashboard__category__td--right">
              $3,800.00
            </td>
          </tr>
          <tr>
            <td className="dashboard__category__td dashboard__category__td--border-double">
              Retirement Fund
            </td>
            <td className="dashboard__category__td dashboard__category__td--right dashboard__category__td--border-double">
              $3,500.00
            </td>
          </tr>
          <tr>
            <th className="dashboard__category__td dashboard__category__td--bottom">
              <a href="/">Add item</a>
            </th>
            <th className="dashboard__category__td dashboard__category__td--right dashboard__category__td--bottom">
              Total: $300.00
            </th>
          </tr>
        </table>
        <table className="dashboard__category__table">
          <tr>
            <th className="dashboard__category__td dashboard__category__td--bottom">
              SAVING
            </th>
            <th className="dashboard__category__td dashboard__category__td--bottom dashboard__category__td--right">
              <span className="dashboard__tab">
                <a href="/">Planning</a>
              </span>
              <span className="dashboard__tab">|</span>
              <span className="dashboard__tab">Spent</span>
              <span className="dashboard__tab">|</span>
              <span className="dashboard__tab">
                <a href="/">Difference</a>
              </span>
            </th>
          </tr>
          <tr>
            <td className="dashboard__category__td">Emergency Fund</td>
            <td className="dashboard__category__td dashboard__category__td--right">
              $3,800.00
            </td>
          </tr>
          <tr>
            <td className="dashboard__category__td dashboard__category__td--border-double">
              Retirement Fund
            </td>
            <td className="dashboard__category__td dashboard__category__td--right dashboard__category__td--border-double">
              $3,500.00
            </td>
          </tr>
          <tr>
            <th className="dashboard__category__td dashboard__category__td--bottom">
              <a href="/">Add item</a>
            </th>
            <th className="dashboard__category__td dashboard__category__td--right dashboard__category__td--bottom">
              Total: $300.00
            </th>
          </tr>
        </table>
      </div>
    </div>
  </Container>
);

export default Dashboard;
