import * as React from 'react';
import { Provider } from 'react-redux';
import Teaser from "../../compositions/teaser/teaserReducer";

export default function homePage(store, teasers) {
    return <Provider store={store}>
        <div>
            {
                Object.keys(teasers).map(function(key, index) {
                    return <Teaser key={index} idx={index} articleId={teasers[key].articleId}/>;
                })
            }
        </div>
    </Provider>;
}