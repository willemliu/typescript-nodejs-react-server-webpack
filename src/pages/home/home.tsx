import * as React from 'react';
import { Provider } from 'react-redux';
import TeaserList from "../../compositions/teaserList/teaserListReducer";

export default function homePage(store, teaserLists) {
    return <Provider store={store}>
        <div>
            {
                Object.keys(teaserLists).map(function(key, index) {
                    return <TeaserList key={index} idx={index} teaserListId={teaserLists[key].teaserListId} articleIds={teaserLists[key].articleIds}/>;
                })
            }
        </div>
    </Provider>;
}