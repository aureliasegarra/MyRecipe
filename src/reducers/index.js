import { combineReducers } from 'redux';
import recipes from './recipes';
import user from './user';
import app from './app';

const globalReducer = combineReducers({
  // mini reducer
  recipes,
  user,
  app,
});

export default globalReducer;
