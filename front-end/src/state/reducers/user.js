import {
  GET_BUDGET_TEMPLATES,
  GET_BUDGET_TEMPLATES_ERROR,
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

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_BUDGET_TEMPLATES:
      return {
        ...state,
        templates: [ ...state.templates, action.payload.data.templates] ,
      };
    case GET_BUDGET_TEMPLATES_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
