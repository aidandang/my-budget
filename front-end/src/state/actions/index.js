import axios from 'axios';
import { auth } from '../../firebase/firebase.utils';
import {
  AUTH_USER,
  AUTH_ERROR,
  GET_BUDGET_TEMPLATES,
  GET_BUDGET_TEMPLATES_ERROR,
} from './types';

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export const signup =
  ({ email, password }, callback) =>
  async (dispatch) => {
    try {
      const userAuth = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      dispatch({ type: AUTH_USER, payload: userAuth });
      callback();
    } catch (err) {
      dispatch({ type: AUTH_ERROR, payload: err.message });
    }
  };

export const signin =
  ({ email, password }, goToDashboard) =>
  async (dispatch) => {
    try {
      const userAuth = await auth.signInWithEmailAndPassword(email, password);
      dispatch({ type: AUTH_USER, payload: userAuth });

      goToDashboard();
    } catch (err) {
      dispatch({ type: AUTH_ERROR, payload: err.message });
    }
  };

export const authChanged = (userAuth) => (dispatch) => {
  dispatch({ type: AUTH_USER, payload: userAuth });
};

export const getBudgetTemplates = (pathname) => async (dispatch) => {
  try {
    const token = await auth.currentUser.getIdToken();

    const data = await axios
      .create({ headers: { Authorization: `Bearer ${token}` } })
      .get(BASE_API_URL + pathname);

    dispatch({ type: GET_BUDGET_TEMPLATES, payload: data });
  } catch (err) {
    dispatch({ type: GET_BUDGET_TEMPLATES_ERROR, payload: err });
  }
};
