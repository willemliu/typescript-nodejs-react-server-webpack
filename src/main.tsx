/**
 * Entry point for the webclient.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';

import { rootReducer } from './redux/rootReducer';
import { getPageFromStore } from './utils/reduxUtils';

declare var window: any;

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;
console.info('Preloaded state', preloadedState);
// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;
// Create Redux store with initial state
const store = createStore(rootReducer, preloadedState);

let page = getPageFromStore(store);

// Render react components.
ReactDOM.render(
    page,
    document.getElementById('root')
);
