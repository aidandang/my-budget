import React from 'react';
import PropTypes from 'prop-types';

import { Card, Row, Col } from '../../common/Card';

import { connect } from 'react-redux';

const BudgetTotal = ({ templates, selectedTemplate }) => {
  console.log(templates[selectedTemplate].total);
  return (
    <Card>
      <Row header={true} border={true}>
        <Col></Col>
        <Col right={true}>Planning</Col>
      </Row>
      <Row bold={true}>
        <Col>Total Budget</Col>
        <Col right={true}>{`$${templates[selectedTemplate].total}`}</Col>
      </Row>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  templates: state.user.templates,
});

BudgetTotal.propTypes = {
  selectedTemplate: PropTypes.number.isRequired,
  templates: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      budget: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          category: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired,
        })
      ),
      total: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default connect(mapStateToProps)(BudgetTotal);
