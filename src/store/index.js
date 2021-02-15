import { createStore, applyMiddleware } from 'redux';
// eslint-disable-next-line import/no-unresolved
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers';
import recipes from 'src/actions/recipes';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(recipes),
));

export default store;
