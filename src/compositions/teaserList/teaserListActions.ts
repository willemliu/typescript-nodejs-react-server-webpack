/*
 * action types
 */

export const ADD_TEASER_TO_TEASER_LIST = 'ADD_TEASER_TO_TEASER_LIST';
export const REMOVE_TEASER_FROM_TEASER_LISTS = 'REMOVE_TEASER_FROM_TEASER_LISTS';

/*
 * other constants
 */

/*
 * action creators
 */

export function addTeaserToTeaserList(teaserListId: number, articleId) {
  return { type: ADD_TEASER_TO_TEASER_LIST, teaserListId, articleId };
}

export function removeTeaserFromTeaserList(teaserListId: number, articleId) {
  return { type: REMOVE_TEASER_FROM_TEASER_LISTS, teaserListId, articleId };
}
