import React from 'react';

export const Row = ({ children, header, last, border, bold, ...props }) => (
  <div
    className={[
      'row',
      `${header ? 'row--header' : null}`,
      `${last ? 'row--last' : null}`,
      `${border ? 'row--border' : null}`,
      `${bold ? 'row--bold' : null}`,
    ].join(' ')}
    {...props}
  >
    {children}
  </div>
);

export const Col = ({ children, right, ...props }) => (
  <div
    className={['col', `${right ? 'col--right' : null}`].join(' ')}
    {...props}
  >
    {children}
  </div>
);

export const Card = ({ children, ...props }) => (
  <div className="card" {...props}>
    {children}
  </div>
);
