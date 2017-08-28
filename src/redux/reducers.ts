import { combineReducers } from 'redux';
import clockReducer from "../components/clock/clockReducer";
import { teaserReducer } from "../compositions/teaser/teaserReducer";
import { teaserListReducer } from "../compositions/teaserList/teaserListReducer";

/**
 * Combine individual reducers to one root reducer to be used by Redux.
 */
const rootReducer = combineReducers({
    clock: clockReducer,
    teasers: teaserReducer,
    teaserLists: teaserListReducer
});

export { rootReducer };