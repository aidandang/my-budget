import { auth } from '../../firebase/firebase.utils';
import { AUTH_USER, AUTH_ERROR } from './types';

export const signup = ({ email, password }) => async (dispatch) => {
  try {
    const userAuth = await auth.createUserWithEmailAndPassword(email, password);

    dispatch({ type: AUTH_USER, payload: userAuth });
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err.message });
  }
};
