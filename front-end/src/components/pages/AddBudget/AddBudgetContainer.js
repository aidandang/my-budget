import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withRequiredAuth from '../../common/HOC/withRequiredAuth';
import MonthYearForm from './MonthYearForm';
import CategoryRender from './CategoryRender';

import { PageTitle } from '../../common/PageTitle';
import { Note } from '../../common/Note';
import { Button } from '../../common/Button';

import { connect } from 'react-redux';
import * as actions from '../../../state/actions';
import BudgetTotal from './BudgetTotal';

const rightTitle = 'Add Budget';
const noteContent = `HOW TO USE: Select the default or a custom template to create a monthly budget. Choose each category to enter budgets for accounts in it. Add a new account if needed.`;
const CATEGORY = [
  'CHARITY',
  'SAVING',
  'HOUSING',
  'UTILITIES',
  'FOOD',
  'CLOTHING',
  'TRANSPORTATION',
  'MEDICAL/HEALTH',
  'INSURANCE',
  'PERSONAL',
  'RECREATION',
  'DEBTS',
  'INCOMES',
];

class AddBudgetContainer extends Component {
  onSubmit = () => {
    const reqBody = {
      budget: {
        monthyear: this.props.monthyear.values.monthyear,
        accounts: this.props.selectedTemplate.budget,
      },
    };

    this.props.addBudget('/users/add-budget', reqBody);
  };

  calBudgetTotal = () => {
    const total = this.props.selectedTemplate.budget.reduce((acc, el) => {
      if (el.category !== 'INCOMES') {
        return acc + Number(el.value);
      } else {
        return acc;
      }
    }, 0);

    return total ? total.toFixed(2) : '0';
  };

  componentDidMount() {
    this.props.getBudgetTemplates('/users/get-budget-templates');
  }

  render() {
    const { templates, selectedTemplate, selectTemplate, monthyear } =
      this.props;

    return (
      <div className="add-budget">
        <div className="space--medium">&nbsp;</div>

        <PageTitle
          leftTitle={{
            first: selectedTemplate.name,
            second: 'Template',
          }}
          list={templates}
          selected={selectedTemplate}
          setSelected={selectTemplate}
          rightTitle={rightTitle}
        />

        <div className="space--small">&nbsp;</div>

        <Note content={noteContent} />

        <div className="space--medium">&nbsp;</div>

        {/* Month and year of the budget */}
        <MonthYearForm />

        <div className="space--medium">&nbsp;</div>

        {/* Total amount of the budget */}
        <BudgetTotal total={this.calBudgetTotal} />

        <div className="space--medium">&nbsp;</div>

        {/* Budget categories */}
        <div className="headline">Summary by Category</div>

        {CATEGORY.map((cat) => (
          <div key={cat}>
            <CategoryRender category={cat} />
          </div>
        ))}

        <div className="space--large">&nbsp;</div>

        {/* Button to add a new budget */}
        <div>
          <Button
            size={'large'}
            disabled={!(monthyear && monthyear.values)}
            onClick={(e) => {
              e.preventDefault();
              this.onSubmit();
            }}
          >
            Add Budget
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  monthyear: state.form.monthyear,
  templates: state.user.templates,
  selectedTemplate: state.user.selectedTemplate,
  errorMessage: state.user.errorMessage,
});

AddBudgetContainer.propTypes = {
  selectedTemplate: PropTypes.shape({
    name: PropTypes.string.isRequired,
    budget: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
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
    })
  ).isRequired,
  getBudgetTemplates: PropTypes.func.isRequired,
  selectTemplate: PropTypes.func.isRequired,
  addBudget: PropTypes.func.isRequired,
  monthyear: PropTypes.object,
};

export default connect(
  mapStateToProps,
  actions
)(withRequiredAuth(AddBudgetContainer));
