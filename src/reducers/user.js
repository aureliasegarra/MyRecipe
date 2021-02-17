import { CHANGE_VALUE, SAVE_USER, LOGOUT } from 'src/actions/user';

const initialState = {
  email: '',
  password: '',
  infos: {
    logged: false,
    pseudo: '',
    token: '',
  },
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE: {
      return {
        ...state,
        [action.name]: action.value, // dynamization of the value according to the field with []
      };
    }
    case SAVE_USER: {
      return {
        ...state,
        email: '',
        password: '',
        infos: {
          ...state.infos,
          ...action.user,
        },
      };
    }
    case LOGOUT: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};

export default user;
