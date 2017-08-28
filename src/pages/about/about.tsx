import * as React from 'react';
import { Provider } from 'react-redux';
import TeaserList from "../../compositions/teaserList/teaserListReducer";

/**
 * Returns the page JSX.
 * 
 * @param store Redux store passed to the Provider.
 * @param teaserLists teaser lists to be rendered.
 */
export default function aboutPage(store, teaserLists) {
    return <Provider store={store}>
        <div>
            <h1>about</h1>
            {
                Object.keys(teaserLists).map(function(key, index) {
                    return <TeaserList key={index} idx={index} teaserListId={teaserLists[key].teaserListId} articleIds={teaserLists[key].articleIds}/>;
                })
            }
        </div>
    </Provider>;
}