import { combineReducers } from 'redux';
import clockReducer from "../components/clock/clockReducer";
import { teaserReducer } from "../compositions/teaser/teaserReducer";

const rootReducer = combineReducers({
    clock: clockReducer,
    teasers: teaserReducer
});

export { rootReducer };