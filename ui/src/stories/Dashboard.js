import React from 'react';

import { Container } from './Container';
import './dashboard.css';

export const Dashboard = ({ user }) => (
  <Container user={user}>
    <div className="dashboard">
      <h1 className="hidden-title">Dashboard</h1>
      <div className="dashboard__month">
        <span className="inline-bold">May</span> 2021
      </div>
      <hr className="separator separator--light" />
      <p className="note">
        HOW TO USE: Enter your budget for each category in the Summary By
        Category table below. Enter transactions on the Transactions sheet to
        see how your actual spending compares to your budget.
      </p>
      <hr className="separator separator--bold" />
      <div className="headline-1">Cash Flow Report</div>
      <table>
        <tr>
          <th>Account</th>
          <th>Projected</th>
          <th>Actual</th>
        </tr>
        <tr>
          <td>Income</td>
          <td>$3,600.00</td>
          <td>$3,800.00</td>
        </tr>
        <tr>
          <td>Expense</td>
          <td>$3,500.00</td>
          <td>$3,500.00</td>
        </tr>
        <tr>
          <td>Total Cash</td>
          <td>$100.00</td>
          <td>$300.00</td>
        </tr>
      </table>
    </div>
  </Container>
);

export default Dashboard;
