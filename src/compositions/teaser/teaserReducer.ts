import { ADD_TEASER, REMOVE_TEASER } from "./teaserActions";
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import * as TeaserActions from './teaserActions';
import Teaser from "./Teaser";

const initialState: any = {};

export function teaserReducer(state = initialState, action) {
    let newState = Object.assign({}, state);
    switch(action.type) {
        case ADD_TEASER:
            /**
             * Add teaser to the store.
             */
            newState[action.articleId] = action;
            return newState;
        case REMOVE_TEASER:
            /**
             * Remove teaser from the store.
             */
            console.info('Reducer', REMOVE_TEASER, action.articleId);
            delete newState[action.articleId];
            return newState;
        default:
            /**
             * Could also just return state instead of newState. Oh well...
             */
            return newState;
    }
}


function mapStateToProps(state, ownProps) {
    return {
        teaser: state.teasers[ownProps.articleId]
    };
}
  
function mapDispatchToProps(dispatch, ownProps) {
    return { 
        actions: bindActionCreators(TeaserActions as any, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Teaser);