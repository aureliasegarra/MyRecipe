import { combineReducers } from 'redux';
import recipes from './recipes';
import user from './user';

const globalReducer = combineReducers({
  // mini reducer
  recipes,
  user,
});

export default globalReducer;
