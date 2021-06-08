import React from 'react';

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

export const Table = ({ children, ...props }) => (
  <table className="table" {...props}>
    <tbody>{children}</tbody>
  </table>
);

export default Table;
