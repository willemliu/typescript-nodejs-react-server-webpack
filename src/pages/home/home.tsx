import * as React from 'react';
import { Provider } from 'react-redux';

import TeaserList from '../../compositions/teaserList/teaserListReducer';
import { ListsServiceConfig } from '../../conf/config';

/**
 * Returns the page JSX.
 * 
 * @param store Redux store passed to the Provider.
 * @param teaserLists teaser lists to be rendered.
 */
export default function homePage(store, teaserLists, aboveTheFold = false) {
    return <Provider store={store}>
        <div>
            <h1>home</h1>
            {
                ListsServiceConfig.lists.map(function(list, index) {
                    if(aboveTheFold && index > 2) {
                        return false;
                    }
                    return <TeaserList key={list.name} idx={index} teaserListName={list.name} articleIds={teaserLists[list.name].articleIds}/>;
                })
            }
        </div>
    </Provider>;
}