/**
 * Collection of Redux helper functions.
 */

import aboutPage from "../pages/about/about";
import homePage from "../pages/home/home";
import { Store, createStore } from "redux";
import { rootReducer } from "../redux/reducers";

/**
 * Create a global Redux store instance. This store is the same for every visitor and
 * can contain data for pages which a user never visited. It is useful for a SPA
 * (Single Page app). Maybe less so for a multi-page app.
 * 
 * One could argue for having a single store for a multi-page app which results in faster
 * page-rendering because we can assume the store does not contain stale data and we don't
 * need to retrieve dynamic data upon page load.
 * To have this work properly however we need to have a process which keeps the Redux store
 * up-to-date and also purge data from the store which is no longer needed to free up some
 * memory. Freeing up memory is crucial as a webserver could live for a very long time and
 * the store would otherwise keep accumulating data.
 * If speed is of utmost importance then implementing the necessary management code might
 * outweigh the benefit of a more compact and easier to maintain application.
 */
const store: any = createStore(rootReducer);
        
/**
 * Return the global Redux store.
 */
export function getStore(): Store<any> {
    return store;
}

/**
 * Return the JSX of the current page.
 * 
 * @param store The Redux store to be used for rendering the page.
 */
export function getPageFromStore(store: Store<any>) {
    let jsx;
    switch(store.getState().page) {
        case 'about':
            jsx = aboutPage(store, store.getState().teaserLists);
            break;
        default:
            jsx = homePage(store, store.getState().teaserLists);
    }
    return jsx;    
}