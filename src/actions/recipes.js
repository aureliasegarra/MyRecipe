// Action types
export const FETCH_RECIPES = 'FETCH_RECIPES';
export const SAVE_RECIPES = 'SAVE_RECIPES';

// Action creator
export const fetchRecipes = () => ({
  type: FETCH_RECIPES,
});

export const saveRecipes = (recipes) => ({
  type: SAVE_RECIPES,
  recipes,
});
