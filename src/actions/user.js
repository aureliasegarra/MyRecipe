// action type
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const LOGIN = 'LOGIN';

// action creator
export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  value,
  name,
});

export const login = () => ({
  type: LOGIN,
});
