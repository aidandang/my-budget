import { SAVE_USER } from './types';

export function saveUser(user) {
  return {
    type: SAVE_USER,
    payload: user,
  };
}
