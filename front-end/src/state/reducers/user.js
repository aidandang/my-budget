import {
  GET_BUDGET_TEMPLATES,
  GET_BUDGET_TEMPLATES_ERROR,
  UPDATE_BUDGET_ACCOUNT,
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
  errorMessage: '',
};

const updateTemplateAccount = (templates, payload) => {
  const {
    account,
    budget,
    selectedTemplate,
    selectedCategory,
    selectedAccount,
  } = payload;
  templates[selectedTemplate].budget[selectedCategory].accounts[
    selectedAccount
  ].name = account;
  templates[selectedTemplate].budget[selectedCategory].accounts[
    selectedAccount
  ].value = budget;

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
        templates: updateTemplateAccount(state.templates, action.payload),
      };
    default:
      return state;
  }
};
