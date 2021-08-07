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
    },
  ],
  errorMessage: '',
};

const updateAccount = (templates, payload) => {
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

const addAccount = (templates, payload) => {
  const { account, budget, selectedTemplate, selectedCategory } = payload;

  templates[selectedTemplate].budget[selectedCategory].accounts.push({
    _id: uuid(),
    name: account,
    value: budget,
  });

  return templates;
};

const removeAccount = (templates, payload) => {
  const { selectedTemplate, selectedCategory, selectedAccount } = payload;

  templates[selectedTemplate].budget[selectedCategory].accounts = templates[
    selectedTemplate
  ].budget[selectedCategory].accounts.filter(
    (el, index) => index !== selectedAccount
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
