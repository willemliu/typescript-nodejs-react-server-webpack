/*
 * action types
 */

export const SET_NAME = 'SET_NAME';

/*
 * other constants
 */

/*
 * action creators
 */

export function setName(val) {
  return { type: SET_NAME, name: val };
}
