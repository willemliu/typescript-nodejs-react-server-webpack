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

declare var __dirname: any;

/**
 * Handles our homepage routes.
 */
export default class HomeController {
    private app: express.Application;
    private templates = {};
    private debug: boolean;

    /**
     * Constructor.
     * @param app Express app instance.
     * @param debug when debug is true we use this flag in our Mustache template to determine which React JS files to load.
     */
    constructor(app: express.Application, debug?: boolean) {
        console.info('Initialized Home page');
        if(debug !== undefined) {
            this.debug = debug;
        }
        this.app = app;
        // We load the homepage Mustache template and when done we initialize the routes.
        this.loadTemplates({home: `${__dirname}/home.mst`}).then(() => {
            console.info('Templates load done');
            this.initRoutes();
        });
    }

    /**
     * Setup all routes for our homepage.
     */
    initRoutes() {
        this.app.get('/', (req, res) => {
            // Create a new Redux store instance whose state will be passed along to the client.
            const store: any = createStore(rootReducer);

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
            const html = Mustache.render(this.templates['home'], {debug: this.debug}, {
                reactHtml: ReactDOMServer.renderToString(
                    homePage(store, store.getState().teaserLists)
                ),
                preloadedState: JSON.stringify(store.getState(), null, 2)
            });
            res.send(html);
        });
    }

    /**
     * Load Mustache templates from file.
     */
    private loadTemplates(templateFiles: {home: string}) {
        let promises = new Array();
        for(let idx in templateFiles) {
            if(templateFiles.hasOwnProperty(idx)) {
                const templateFile = templateFiles[idx];
                promises.push(fs.readFile(templateFile, 'utf-8')
                .then((result) => {
                    this.templates[idx] = result;
                })
                .catch((error) => {
                    if (error) throw error;
                }));
            }
        }
        return Promise.all(promises);
    }
}
