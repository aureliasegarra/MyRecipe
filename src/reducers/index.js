import { combineReducers } from 'redux';
import recipes from './recipes';

const globalReducer = combineReducers({
  recipes, // mini reducer
});

export default globalReducer;
