import axios from 'axios';
import {
  LOGIN,
  saveUser,
  fetchFav,
  FETCH_FAV,
  saveFav,
} from 'src/actions/user';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      axios.post('http://localhost:3001/login', {
        email: state.user.email,
        password: state.user.password,
      }).then((response) => {
        store.dispatch(saveUser(response.data)); // stock infos get from the request in the store
        store.dispatch(fetchFav());
      }).catch((error) => console.log(error));
      break;
    }
    case FETCH_FAV: {
      const fetchFavorites = async () => {
        try {
          const state = store.getState();
          const response = await axios({ // config object
            url: 'http://localhost:3001/favorites',
            headers: {
              Authorization: `bearer ${state.user.infos.token}`,
            },
          });
          store.dispatch(saveFav(response.data));
        }
        catch (error) {
          console.log(error);
        }
      };

      fetchFavorites();
      break;
    }
    default:
      next(action);
  }
};

export default user;
