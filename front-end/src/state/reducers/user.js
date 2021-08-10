import { v1 as uuid } from 'uuid';
import {
  ADD_BUDGET_ACCOUNT,
  GET_BUDGET_TEMPLATES,
  GET_BUDGET_TEMPLATES_ERROR,
  SELECT_TEMPLATE,
  REMOVE_BUDGET_ACCOUNT,
  UPDATE_BUDGET_ACCOUNT,
  ADD_BUDGET,
  ADD_BUDGET_ERROR,
} from '../actions/types';
import { defaultBudget } from '../../data/defaultBudget';

const INITIAL_STATE = {
  budgets: [],
  templates: [
    {
      name: 'default',
      budget: defaultBudget,
    },
  ],
  selectedTemplate: {
    name: 'default',
    budget: defaultBudget,
  },
  errorMessage: '',
};

const updateAccount = (selectedTemplate, payload) => {
  const { account, budget, selectedAccount } = payload;

  selectedTemplate.budget = selectedTemplate.budget.map((el) => {
    if (el._id === selectedAccount) {
      return { ...el, name: account, value: budget };
    } else {
      return el;
    }
  });

  return selectedTemplate;
};

const addAccount = (selectedTemplate, payload) => {
  const { account, budget, selectedCategory } = payload;

  selectedTemplate.budget.push({
    _id: uuid(),
    name: account,
    category: selectedCategory,
    value: budget,
  });

  return selectedTemplate;
};

const removeAccount = (selectedTemplate, payload) => {
  const { selectedAccount } = payload;

  selectedTemplate.budget = selectedTemplate.budget.filter(
    (el) => el._id !== selectedAccount
  );

  return selectedTemplate;
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
    case SELECT_TEMPLATE:
      return {
        ...state,
        selectedTemplate: action.payload,
      };
    case UPDATE_BUDGET_ACCOUNT:
      return {
        ...state,
        selectedTemplate: updateAccount(state.selectedTemplate, action.payload),
      };
    case ADD_BUDGET_ACCOUNT:
      return {
        ...state,
        selectedTemplate: addAccount(state.selectedTemplate, action.payload),
      };
    case REMOVE_BUDGET_ACCOUNT:
      return {
        ...state,
        selectedTemplate: removeAccount(state.selectedTemplate, action.payload),
      };
    case ADD_BUDGET:
      return {
        ...state,
        budgets: action.payload,
      };
    case ADD_BUDGET_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
