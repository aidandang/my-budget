import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { templateReducer } from './template';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  auth: authReducer,
  template: templateReducer,
  form: formReducer,
});

export default rootReducer;
