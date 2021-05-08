import React from 'react';

import './table.css';

const Example = () => (
  <>
    <Tr>
      <Th>Date</Th>
      <Th>Desciption</Th>
      <Th>Category</Th>
      <Th align={'right'} last={true}>
        Amount
      </Th>
    </Tr>
    <Tr>
      <Td>05/07/2021</Td>
      <Td>SolCalGas #283338892 SolCalGas #283338892 SolCalGas #283338892</Td>
      <Td>Water Water Water</Td>
      <Td align={'right'} last={true}>
        $15.00
      </Td>
    </Tr>
    <Tr>
      <Th colSpan="3" border={'none'}>
        <a href="/">Add item</a>
      </Th>
      <Th align={'right'} border={'none'} last={true}>
        $15.00
      </Th>
    </Tr>
  </>
);

export const Tr = ({ children, ...props }) => <tr {...props}>{children}</tr>;

export const Th = ({ children, align, last, border, ...props }) => (
  <th
    className={[
      'th',
      `th--${align ? align : 'left'}`,
      `th--border-${border ? border : 'single'}`,
      `${last ? 'th--last' : ''}`,
    ].join(' ')}
    {...props}
  >
    {children}
  </th>
);

export const Td = ({ children, align, last, border, ...props }) => (
  <td
    className={[
      'td',
      `td--${align ? align : 'left'}`,
      `td--border-${border ? border : 'single'}`,
      `${last ? 'td--last' : ''}`,
    ].join(' ')}
    {...props}
  >
    {children}
  </td>
);

export const Table = ({ children, example, ...props }) => (
  <table className="table" {...props}>
    {example && <Example />}
    {children}
  </table>
);

export default Table;
