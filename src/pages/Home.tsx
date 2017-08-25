import * as express from 'express';
import * as fs from 'fs-extra';
import * as Mustache from 'mustache';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Title from "../components/title/titleReducer";
import Clock from "../components/clock/Clock";
import Button from "../components/button/Button";
import { rootReducer } from "../redux/reducers";
import { setTime } from "../components/clock/clockActions";
import { addTitle } from "../components/title/titleActions";

declare var __dirname: any;

export default class Home {
    private app: express.Application;
    private templates = {};

    constructor(app: express.Application) {
        console.info('Initialized Home page');
        this.app = app;
        this.initRoutes();
        this.loadTemplates({home: `${__dirname}/templates/home.mst`}).then(() => {
            console.info('Templates load done');
            this.initRoutes();
        });
    }

    initRoutes() {
        this.app.get('/', (req, res) => {
            // Create a new Redux store instance whose state will be passed along to the client.
            const store: any = createStore(rootReducer);
            store.dispatch(setTime((new Date()).toLocaleTimeString('nl-NL')));
            store.dispatch(addTitle('Willem Liu'));
            store.dispatch(addTitle('Stephanie Wong'));

            const html = Mustache.render(this.templates['home'], {}, {
                reactHtml: ReactDOMServer.renderToString(
                    <Provider store={store}>
                        <div>
                            {store.getState().titles.map((val, idx) => {
                                return <Title key={idx} idx={idx}/>;
                            })}
                            <Button/>
                        </div>
                    </Provider>
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