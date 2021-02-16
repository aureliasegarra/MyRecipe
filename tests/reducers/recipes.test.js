// import what we want to test
// eslint-disable-next-line import/named
import recipesReducer, { initialState } from 'src/reducers/recipes';
// import the function for assertions
import { expect } from 'chai';

import { saveRecipes, SAVE_RECIPES } from 'src/actions/recipes';

describe('Reducer recipes', () => {
  describe('structure', () => { // "describe" make a summary of the tests (2 arg : string to describe and a callback)
    it('should be a function', () => { // it function to launch the tests
      expect(recipesReducer).to.be.a('function');
    });

    it('check initial state', () => {
      expect(initialState).to.be.an('array');
      expect(recipesReducer()).to.be.equal(initialState); // equal tests the reference
    });
  });

  describe('with action', () => {
    it(SAVE_RECIPES, () => {
      const recipes = [{ a: 1 }, { b: 2 }]; // fake data
      const action = saveRecipes(recipes);
      const state = recipesReducer(initialState, action);
      // must therefore return a new array with the elements the table of false data
      expect(state).to.be.an('array').to.be.eql(recipes);
    });
  });
});
