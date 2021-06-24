import React from 'react';

import './card.css';

export const Row = ({ children, header, ...props }) => (
  <div className={`${header ? 'row--header' : 'row'}`} {...props}>
    {children}
  </div>
);

export const Col = ({ children, ...props }) => (
  <div className="col" {...props}>
    {children}
  </div>
);

export const Card = ({ children, header, ...props }) => (
  <div className="card" {...props}>
    {header && (
      <Row>
        <Col></Col>
        <Col>
          <span>Planning</span>
        </Col>
      </Row>
    )}

    <Row>
      <Col>Total Budget</Col>
      <Col>$3,800.00</Col>
    </Row>
    {children}
  </div>
);
