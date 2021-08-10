import { v1 as uuid } from 'uuid';
import {
  ADD_BUDGET_ACCOUNT,
  GET_BUDGET_TEMPLATES,
  GET_BUDGET_TEMPLATES_ERROR,
  REMOVE_BUDGET_ACCOUNT,
  UPDATE_BUDGET_ACCOUNT,
} from '../actions/types';
import { defaultBudget } from '../../data/defaultBudget';

const INITIAL_STATE = {
  budgets: [],
  templates: [
    {
      name: 'default',
      budget: defaultBudget,
      total: '0',
    },
  ],
  errorMessage: '',
};

const calBudgetTotal = (budget) => {
  const total = budget.reduce((acc, el) => {
    if (el.category !== 'INCOMES') {
      return acc + Number(el.value);
    } else {
      return acc;
    }
  }, 0);

  return total ? total.toFixed(2) : '0';
};

const updateAccount = (templates, payload) => {
  const { account, budget, selectedTemplate, selectedAccount } = payload;

  templates[selectedTemplate].budget = templates[selectedTemplate].budget.map(
    (el) => {
      if (el._id === selectedAccount) {
        return { ...el, name: account, value: budget };
      } else {
        return el;
      }
    }
  );
  templates[selectedTemplate].total = calBudgetTotal(
    templates[selectedTemplate].budget
  );

  return templates;
};

const addAccount = (templates, payload) => {
  const { account, budget, selectedTemplate, selectedCategory } = payload;

  templates[selectedTemplate].budget.push({
    _id: uuid(),
    name: account,
    category: selectedCategory,
    value: budget,
  });
  templates[selectedTemplate].total = calBudgetTotal(
    templates[selectedTemplate].budget
  );

  return templates;
};

const removeAccount = (templates, payload) => {
  const { selectedTemplate, selectedAccount } = payload;

  templates[selectedTemplate].budget = templates[
    selectedTemplate
  ].budget.filter((el) => el._id !== selectedAccount);
  templates[selectedTemplate].total = calBudgetTotal(
    templates[selectedTemplate].budget
  );

  return templates;
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_BUDGET_TEMPLATES:
      return {
        ...state,
        templates: state.templates.concat(action.payload),
      };
    case GET_BUDGET_TEMPLATES_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case UPDATE_BUDGET_ACCOUNT:
      return {
        ...state,
        templates: updateAccount(state.templates, action.payload),
      };
    case ADD_BUDGET_ACCOUNT:
      return {
        ...state,
        templates: addAccount(state.templates, action.payload),
      };
    case REMOVE_BUDGET_ACCOUNT:
      return {
        ...state,
        templates: removeAccount(state.templates, action.payload),
      };
    default:
      return state;
  }
};
