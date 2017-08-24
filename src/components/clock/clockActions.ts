/*
 * action types
 */

export const SET_TIME = 'SET_TIME';

/*
 * other constants
 */

/*
 * action creators
 */

export function setTime(date) {
  return { type: SET_TIME, date: date };
}
