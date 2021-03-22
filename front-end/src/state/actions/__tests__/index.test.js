import { saveUser } from 'state/actions';
import { SAVE_USER } from 'state/actions/types';

describe('saveUser', () => {
  it('has the correct type', () => {
    const action = saveUser();

    expect(action.type).toEqual(SAVE_USER);
  });

  it('has the correct payload', () => {
    const action = saveUser({ email: 'new@email.com', password: '123456' });

    expect(action.payload).toEqual({
      email: 'new@email.com',
      password: '123456',
    });
  });
});
