/*
 * action types
 */

export const ADD_TEASER = 'ADD_TEASER';
export const REMOVE_TEASER = 'REMOVE_TEASER';

/*
 * other constants
 */

/*
 * action creators
 */

export function addTeaser(teaser: {articleId: number, title: string, leadtext: string}) {
  return { type: ADD_TEASER, articleId: teaser.articleId, title: teaser.title, leadtext: teaser.leadtext };
}

export function removeTeaser(articleId) {
  return { type: REMOVE_TEASER, articleId };
}
