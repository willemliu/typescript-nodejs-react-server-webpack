import { SET_NAME } from "./titleActions";

const initialState = {
    name: 'John Doe'
};

export default function titleReducer(state = initialState, action) {
    let newState = Object.assign({}, state);
    switch(action.type) {
        case SET_NAME:
            newState.name = action.name;
            return newState;
        default:
            return newState;
    }
}
