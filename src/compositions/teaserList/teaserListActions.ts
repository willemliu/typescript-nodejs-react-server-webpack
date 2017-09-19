/*
 * action types
 */

export const ADD_TEASER_TO_TEASER_LIST = 'ADD_TEASER_TO_TEASER_LIST';
export const SET_TEASERS_FOR_TEASER_LIST = 'SET_TEASERS_FOR_TEASER_LIST';
export const REMOVE_TEASER_FROM_TEASER_LISTS = 'REMOVE_TEASER_FROM_TEASER_LISTS';

/*
 * other constants
 */

/*
 * action creators
 */

export function addTeaserToTeaserList(teaserListName: number, articleId) {
  return { type: ADD_TEASER_TO_TEASER_LIST, teaserListName, articleId };
}

export function setTeasersForTeaserList(teaserListName: string, articleIds: number[]) {
  return { type: SET_TEASERS_FOR_TEASER_LIST, teaserListName, articleIds };
}

export function removeTeaserFromTeaserLists(teaserListName: number, articleId) {
  return { type: REMOVE_TEASER_FROM_TEASER_LISTS, teaserListName, articleId };
}
