import React from 'react';

function DashboardRender() {
  return (
    <div className="dashboard">
      <h1 className="hidden-title">Dashboard</h1>
      <div>
        <span>April</span> <span>2021</span>{' '}
        <span>
          <i className="fas fa-chevron-down"></i>
        </span>
      </div>
      <hr className="separator separator--light" />
      <p>
        HOW TO USE: Enter your budget for each category in the Summary By
        Category table below. Enter transactions on the Transactions sheet to
        see how your actual spending compares to your budget.
      </p>
      <hr className="separator separator--bold" />
      <div>CASH FLOW REPORT</div>
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
      <div>SUMMARY BY CATEGORY</div>
      <div>
        <span>Projected</span> <span>Actual</span> <span>Difference</span>
      </div>
      <div>
        <div>
          <div>Income</div>
          <div>Projected</div>
        </div>
        <div>
          <div>Paycheck 1</div>
          <div>$0.00</div>
        </div>
        <div>
          <div>Paycheck 2</div>
          <div>$0.00</div>
        </div>
        <div>
          <div>Add Income</div>
        </div>
      </div>
    </div>
  );
}

export default DashboardRender;
