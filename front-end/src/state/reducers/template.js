import {
  GET_TEMPLATE_BUDGET,
  GET_TEMPLATE_BUDGET_ERROR,
} from '../actions/types';
import { defaultBudget } from '../../data/defaultBudget';

const INITIAL_STATE = {
  budget: defaultBudget,
  errorMessage: '',
};

export const templateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TEMPLATE_BUDGET:
      return {
        ...state,
        budget: action.payload,
      };
    case GET_TEMPLATE_BUDGET_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
