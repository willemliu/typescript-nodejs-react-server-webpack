import { ADD_TITLE } from "./titleActions";
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import * as TitleActions from './titleActions';
import Title from "./Title";

const initialState: any = [];

export function titleReducer(state = initialState, action) {
    let newState = [...state];
    switch(action.type) {
        case ADD_TITLE:
            newState.push(action.title);
            return newState;
        default:
            return newState;
    }
}


function mapStateToProps(state, ownProps) {
    console.info(ownProps.idx, state);
    return {
        title: state.titles[ownProps.idx]
    };
}
  
function mapDispatchToProps(dispatch, ownProps) {
    return { 
        actions: bindActionCreators(TitleActions as any, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Title);