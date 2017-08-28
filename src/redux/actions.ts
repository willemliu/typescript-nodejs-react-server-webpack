/*
 * action types
 */

export const SET_PAGE = 'SET_PAGE';

/*
 * other constants
 */

/*
 * action creators
 */

export function setPage(page) {
  return { type: SET_PAGE, page };
}
