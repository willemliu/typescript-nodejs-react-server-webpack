import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Teaser from './Teaser';
import { REMOVE_TEASER, SET_TEASER } from './teaserActions';
import * as TeaserActions from './teaserActions';

const initialState: any = {};

export function teaserReducer(state = initialState, action) {
    let newState = Object.assign({}, state);
    switch(action.type) {
        case SET_TEASER:
            /**
             * Set teaser in the store.
             */
            newState[action.articleId] = { articleId: action.articleId, title: action.title, leadtext: action.leadtext };
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
    console.info(ownProps);
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