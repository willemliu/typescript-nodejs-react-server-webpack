/*
 * action types
 */

export const SET_TEASER = 'SET_TEASER';
export const REMOVE_TEASER = 'REMOVE_TEASER';

/*
 * other constants
 */

/*
 * action creators
 */

export function setTeaser(teaser: {id: number, teaserTitle: string, teaserIntro: string}) {
  return { type: SET_TEASER, articleId: teaser.id, title: teaser.teaserTitle, leadtext: teaser.teaserIntro };
}

export function removeTeaser(articleId) {
  return { type: REMOVE_TEASER, articleId };
}
