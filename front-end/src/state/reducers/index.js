import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { userReducer } from './user';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  form: formReducer,
});

export default rootReducer;
