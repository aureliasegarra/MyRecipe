import axios from 'axios';
import { LOGIN, saveUser } from 'src/actions/user';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      console.log('case', LOGIN);
      axios.post('http://localhost:3001/login', {
        email: state.user.email,
        password: state.user.password,
      }).then((response) => {
        store.dispatch(saveUser(response.data)); // stock infos get from the request in the store
      }).catch((error) => console.log(error));
      break;
    }
    default:
      next(action);
  }
};

export default user;
