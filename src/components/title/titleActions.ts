/*
 * action types
 */

export const ADD_TITLE = 'ADD_TITLE';

/*
 * other constants
 */

/*
 * action creators
 */

export function addTitle(val) {
  return { type: ADD_TITLE, title: val };
}
