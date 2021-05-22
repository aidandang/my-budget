import axios from 'axios';
import { auth } from '../../firebase/firebase.utils';
import {
  AUTH_USER,
  AUTH_ERROR,
  GET_TEMPLATE_BUDGET,
  GET_TEMPLATE_BUDGET_ERROR,
} from './types';

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export const getReqWithAuth = async (pathname) => {
  try {
    const token = await auth.currentUser.getIdToken();

    await axios
      .create({ headers: { Authorization: `Bearer ${token}` } })
      .get(BASE_API_URL + pathname);
  } catch (err) {
    console.log(err);
  }
};

export const postReqWithAuth = async (pathname, reqBody) => {
  try {
    const token = await auth.currentUser.getIdToken();

    await axios
      .create({ headers: { Authorization: `Bearer ${token}` } })
      .post(BASE_API_URL + pathname, reqBody);
  } catch (err) {
    console.log(err);
  }
};

export const patchReqWithAuth = async (pathname, reqBody) => {
  try {
    const token = await auth.currentUser.getIdToken();

    await axios
      .create({ headers: { Authorization: `Bearer ${token}` } })
      .patch(BASE_API_URL + pathname, reqBody);
  } catch (err) {
    console.log(err);
  }
};

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

export const getTemplateBudget = (pathname, params) => async (dispatch) => {
  try {
    const token = await auth.currentUser.getIdToken();

    const data = await axios
      .create({ headers: { Authorization: `Bearer ${token}` } })
      .get(BASE_API_URL + pathname, params);

    dispatch({ type: GET_TEMPLATE_BUDGET, payload: data });
  } catch (err) {
    dispatch({ type: GET_TEMPLATE_BUDGET_ERROR, payload: err });
  }
};
