import { SAVE_RECIPES } from 'src/actions/recipes';

const initialState = [];

const recipes = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES:
      return [...action.recipes];
    default:
      return state;
  }
};

export default recipes;
