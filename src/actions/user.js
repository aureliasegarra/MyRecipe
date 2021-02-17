// action type
export const CHANGE_VALUE = 'CHANGE_VALUE';

// action creator
export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  value,
  name,
});
