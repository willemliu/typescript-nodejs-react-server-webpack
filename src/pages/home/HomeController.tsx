import * as express from 'express';
import * as fs from 'fs-extra';
import * as Mustache from 'mustache';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import homePage from "./home";
import { createStore } from 'redux';
import { rootReducer } from "../../redux/reducers";
import { addTeaser } from "../../compositions/teaser/teaserActions";
import { addTeaserToTeaserList } from "../../compositions/teaserList/teaserListActions";
import { loadTemplates } from "../../utils/mustacheUtils";
import { setPage } from "../../redux/actions";
import { getPageFromStore } from "../../utils/reduxUtils";

declare var __dirname: any;

/**
 * Handles our homepage routes.
 * 
 * Is responsible for populating the initial Redux store to render the page.
 */
export default class HomeController {
    private app: express.Application;
    private templates = {};
    private debug: boolean;
    private page: string = 'home';

    /**
     * Constructor.
     * @param app Express app instance.
     * @param debug
     */
    constructor(app: express.Application, debug?: boolean) {
        console.info('Initialized Home page');
        if(debug !== undefined) {
            this.debug = debug;
        }
        this.app = app;
        // We load the homepage Mustache template and when done we initialize the routes.
        loadTemplates({home: `${__dirname}/${this.page}.mst`}).then((templates) => {
            console.info('Templates load done', templates);
            this.templates = templates;
            this.initRoutes();
        });
    }

    /**
     * Setup all routes for our homepage.
     */
    initRoutes() {
        this.app.get('/', this.getHomePage.bind(this));
        this.app.get(`/${this.page}`, this.getHomePage.bind(this));
    }

    private getHomePage(req, res) {
        // Create a new Redux store instance whose state will be passed along to the client.
        const store: any = createStore(rootReducer);

        // Set the current page so the client knows what to render.
        store.dispatch(setPage(this.page));
        
        // Create some teasers.
        store.dispatch(addTeaser({articleId: 123, title: 'Willem Liu', leadtext: 'This is something'}));
        store.dispatch(addTeaser({articleId: 1234, title: 'Stephanie Wong', leadtext: 'This is something else'}));

        // Create some article lists.
        store.dispatch(addTeaserToTeaserList(321, 123));
        store.dispatch(addTeaserToTeaserList(321, 1234));

        store.dispatch(addTeaserToTeaserList(213, 1234));
        store.dispatch(addTeaserToTeaserList(213, 123));

        // Render our homepage. Pass preloadedState as partial which is set as JS object in the page to be
        // picked up by the client side Redux as initial state.
        const html = Mustache.render(this.templates[this.page], {debug: this.debug}, {
            reactHtml: ReactDOMServer.renderToString(
                getPageFromStore(store)
            ),
            preloadedState: (this.debug)?JSON.stringify(store.getState(), null, 2):JSON.stringify(store.getState())
        });
        res.send(html);
    }
}
