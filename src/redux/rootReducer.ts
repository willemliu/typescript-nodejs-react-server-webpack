import { combineReducers } from 'redux';

import clockReducer from '../components/clock/clockReducer';
import { teaserReducer } from '../compositions/teaser/teaserReducer';
import { teaserListReducer } from '../compositions/teaserList/teaserListReducer';
import { SET_PAGE } from './actions';

/**
 * Combine individual reducers to one root reducer to be used by Redux.
 */
const rootReducer = combineReducers({
    clock: clockReducer,
    teasers: teaserReducer,
    teaserLists: teaserListReducer,
    page: pageReducer
});

export { rootReducer };

export function pageReducer(state = 'home', action) {
    let newState = state;
    switch(action.type) {
        case SET_PAGE:
            /**
             * Set current page
             */
            newState = action.page;
            return newState;
        default:
            /**
             * Could also just return state instead of newState because nothing has changed. Oh well...
             */
            return newState;
    }
}
