import { CHANGE_VALUE } from 'src/actions/user';

const initialState = {
  email: 'vincent@gmail.com',
  password: 'aze',
  infos: {
    pseudo: '',
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
    default:
      return state;
  }
};

export default user;
