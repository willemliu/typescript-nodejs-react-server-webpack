import * as express from 'express';
import * as fs from 'fs-extra';
import * as Mustache from 'mustache';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { createStore } from 'redux';
import { rootReducer } from "../../redux/reducers";
import { addTeaser } from "../../compositions/teaser/teaserActions";
import homePage from "./home";

declare var __dirname: any;

export default class HomeController {
    private app: express.Application;
    private templates = {};
    private debug: boolean;

    constructor(app: express.Application, debug?: boolean) {
        console.info('Initialized Home page');
        if(debug !== undefined) {
            this.debug = debug;
        }
        this.app = app;
        this.loadTemplates({home: `${__dirname}/home.mst`}).then(() => {
            console.info('Templates load done');
            this.initRoutes();
        });
    }

    initRoutes() {
        this.app.get('/', (req, res) => {
            // Create a new Redux store instance whose state will be passed along to the client.
            const store: any = createStore(rootReducer);
            store.dispatch(addTeaser({articleId: 123, title: 'Willem Liu', leadtext: 'This is something'}));
            store.dispatch(addTeaser({articleId: 1234, title: 'Stephanie Wong', leadtext: 'This is something else'}));

            const teasers = store.getState().teasers;

            const html = Mustache.render(this.templates['home'], {debug: this.debug}, {
                reactHtml: ReactDOMServer.renderToString(
                    homePage(store, teasers)
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
