import { SET_TIME } from "./clockActions";

const initialState = {
    date: new Date()
};

export default function clockReducer(state = initialState, action) {
    let newState = Object.assign({}, state);
    switch(action.type) {
        case SET_TIME:
            newState.date = new Date();
            return newState;
        default:
            return newState;
    }
}
