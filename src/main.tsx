import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from "./redux/reducers";
import Teaser from "./compositions/teaser/teaserReducer";
import homePage from "./pages/home/home";

declare var window: any;

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;
console.info('Preloaded state', preloadedState);
// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;
// Create Redux store with initial state
const store = createStore(rootReducer, preloadedState);

const teasers = store.getState().teasers;

ReactDOM.render(
    homePage(store, teasers),
    document.getElementById('root')
);
