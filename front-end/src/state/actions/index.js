import { auth } from '../../firebase/firebase.utils';
import { AUTH_USER, AUTH_ERROR } from './types';

export const signup = ({ email, password }, callback) => async (dispatch) => {
  try {
    const userAuth = await auth.createUserWithEmailAndPassword(email, password);
    dispatch({ type: AUTH_USER, payload: userAuth });

    callback();
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err.message });
  }
};

export const signin = ({ email, password }, callback) => async (dispatch) => {
  try {
    const userAuth = await auth.signInWithEmailAndPassword(email, password);
    dispatch({ type: AUTH_USER, payload: userAuth });

    callback();
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err.message });
  }
};

export const authChanged = (userAuth) => (dispatch) => {
  dispatch({ type: AUTH_USER, payload: userAuth });
};
