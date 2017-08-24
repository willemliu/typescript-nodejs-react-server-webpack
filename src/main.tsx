import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Title from "./components/title/Title";
import Clock from "./components/clock/Clock";
import Button from "./components/button/Button";
import { rootReducer } from "./redux/reducers";

declare var window: any;

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;
console.info('Preloaded state', preloadedState);
// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;
// Create Redux store with initial state
const store = createStore(rootReducer, preloadedState);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Title/>
            <Clock/>
            <Button/>
        </div>
    </Provider>,
    document.getElementById('root')
);
