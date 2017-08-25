import { combineReducers } from 'redux';
import clockReducer from "../components/clock/clockReducer";
import { titleReducer } from "../components/title/titleReducer";

const rootReducer = combineReducers({
    titles: titleReducer,
    clock: clockReducer
});

export { rootReducer };