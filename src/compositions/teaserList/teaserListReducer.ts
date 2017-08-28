import { ADD_TEASER_TO_TEASER_LIST, REMOVE_TEASER_FROM_TEASER_LISTS } from "./teaserListActions";
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import * as TeaserListActions from './teaserListActions';
import TeaserList from "./TeaserList";

const initialState: any = {};

export function teaserListReducer(state = initialState, action) {
    let newState = Object.assign({}, state);
    switch(action.type) {
        case ADD_TEASER_TO_TEASER_LIST:
            /**
             * Add teaser to teaser list identified by the given teaser list id.
             */
            if(!newState[action.teaserListId]) {
                newState[action.teaserListId] = {};
                newState[action.teaserListId].articleIds = [];
            }
            newState[action.teaserListId].teaserListId = action.teaserListId;
            newState[action.teaserListId].articleIds.push(action.articleId);
            return newState;
        case REMOVE_TEASER_FROM_TEASER_LISTS:
            /**
             * Remove the given article id from all the teaser lists.
             */
            console.info('Reducer', REMOVE_TEASER_FROM_TEASER_LISTS, action.articleId, state);
            Object.keys(newState).map(function(key, index) {
                const teaserList = newState[key];
                teaserList.articleIds.splice(teaserList.articleIds.indexOf(action.articleId), 1);
                if(teaserList.articleIds.length === 0) {
                    delete teaserList.articleIds;
                }
            });
            return newState;
        default:
            /**
             * Could also just return state instead of newState because nothing has changed. Oh well...
             */
            return newState;
    }
}


function mapStateToProps(state, ownProps) {
    return {
        teaserListId: state.teaserLists[ownProps.teaserListId].teaserListId,
        articleIds: state.teaserLists[ownProps.teaserListId].articleIds
    };
}
  
function mapDispatchToProps(dispatch, ownProps) {
    return { 
        actions: bindActionCreators(TeaserListActions as any, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeaserList);