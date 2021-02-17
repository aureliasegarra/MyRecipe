import axios from 'axios';
import { FETCH_RECIPES, saveRecipes } from 'src/actions/recipes';
import { isLoading } from 'src/actions/app';

const recipes = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES: {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3001/recipes');
          store.dispatch(saveRecipes(response.data));
        }
        catch (error) {
          // eslint-disable-next-line no-console
          console.log('error', error);
        }
        finally {
          // get off loading
          store.dispatch(isLoading(false));
        }
      };

      fetchData();
      break;
    }
    default:
      next(action);
  }
};

export default recipes;
