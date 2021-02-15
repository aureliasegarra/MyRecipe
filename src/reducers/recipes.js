import recipesData from 'src/data';

const initialState = [...recipesData];

const recipes = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default recipes;
