// action type
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const LOGIN = 'LOGIN';
export const SAVE_USER = 'SAVE_USER';

// action creator
export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  value,
  name,
});

export const login = () => ({
  type: LOGIN,
});

export const saveUser = (user) => ({
  type: SAVE_USER,
  user,
});
