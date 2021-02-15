import { createStore, applyMiddleware } from 'redux';
// eslint-disable-next-line import/no-unresolved
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(),
));

export default store;
