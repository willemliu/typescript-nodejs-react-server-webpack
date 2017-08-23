import * as express from 'express';
import * as fs from 'fs-extra';
import * as Mustache from 'mustache';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import Title from '../components/title/Title';
import Clock from "../components/clock/Clock";

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
            const html = Mustache.render(this.templates['home'], {}, {
                reactHtml: ReactDOMServer.renderToString(
                    <div>
                        <Title name="Willem Liu"/>
                        <Clock/>
                    </div>
                )
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