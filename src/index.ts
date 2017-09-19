/**
 * Entry point for the NodeJS application
 */
import * as express from 'express';
import * as winston from 'winston';

import { AppConfig } from './conf/config';
import AboutController from './pages/about/AboutController';
import HomeController from './pages/home/HomeController';

declare var process: any;

winston.level = 'warn';
console.log = (function(txt:any){winston.log('log', txt)});
console.info = (function(txt:any){winston.info(txt)});
console.debug = (function(txt:any){winston.debug(txt)});
console.warn = (function(txt:any){winston.warn(txt)});
console.error = (function(txt:any){winston.error(txt)});

// Disable console logging when not in development.
let debug = true;
if(process.env.NODE_ENV == 'development') {
	console.info(new Date(), 'Running in', process.env.NODE_ENV);
} else {
	debug = false;
	console.info(new Date(), 'Running in Production');
	console.debug = function() {};
	console.log = function() {};
}

// Create Express instance.
const app: express.Application = express();

/**
 * Start our Express webserver on the port defined above.
 */
app.listen(AppConfig.port, () => {
	console.info(`Example app listening on port ${AppConfig.port}`);
	// Expose our static files.
	for(let staticFile of AppConfig.staticFiles) {
		app.use(staticFile.route, express.static(staticFile.path));		
	}
	// Instantiate our HomeController which handles our homepage routes.
    new HomeController(app, debug);
	// Instantiate our AboutController which handles our about page routes.
    new AboutController(app, debug);
});
