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
export default function aboutPage(store, teaserLists) {
    return <Provider store={store}>
        <div>
            <h1>about</h1>
            {
                ListsServiceConfig.lists.map(function(list, index) {
                    return <TeaserList key={list.name} idx={index} teaserListName={list.name} articleIds={teaserLists[list.name].articleIds}/>;
                })
            }
        </div>
    </Provider>;
}