import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card, Row, Col } from '../../common/Card';

class BudgetTotal extends Component {
  render() {
    return (
      <Card>
        <Row header={true} border={true}>
          <Col></Col>
          <Col right={true}>Planning</Col>
        </Row>
        <Row bold={true}>
          <Col>Total Budget</Col>
          <Col right={true}>{`$${this.props.total()}`}</Col>
        </Row>
      </Card>
    );
  }
}

BudgetTotal.propTypes = {
  total: PropTypes.func.isRequired,
};

export default BudgetTotal;
