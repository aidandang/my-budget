import userReducer from 'state/reducers/user';
import { SAVE_USER } from 'state/actions/types';

it('handles actions of type SAVE_USER', () => {
  const action = {
    type: SAVE_USER,
    payload: {
      email: 'new@email.com',
      password: '123456',
    },
  };

  const newState = userReducer({}, action);

  expect(newState).toEqual({ email: 'new@email.com', password: '123456' });
});

it('handle actions with unknown type', () => {
  const newState = userReducer({}, { type: 'RANDOM' });

  expect(newState).toEqual({});
});
