import { AUTH_USER, AUTH_ERROR } from '../actions/types';

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: '',
  checked: false,
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        currentUser: action.payload,
        checked: true,
      };
    case AUTH_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
