import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers';
import recipes from 'src/middlewares/recipes';
import user from 'src/middlewares/user';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(recipes, user),
));

export default store;
