import { combineReducers } from 'redux';
import recipes from './recipes';

const globalReducers = combineReducers({
  recipes,
});

export default globalReducers;
