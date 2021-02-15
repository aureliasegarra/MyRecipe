import { FETCH_RECIPES } from 'src/ actions/recipes';

const recipes = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES: {
      break;
    }
    default:
      next(action);
  }
};

export default recipes;
