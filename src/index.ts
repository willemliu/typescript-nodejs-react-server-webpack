/**
 * NodeJS application start
 */
import * as express from 'express';
import HomeController from "./pages/home/HomeController";
import AboutController from "./pages/about/AboutController";

declare var process: any;

// Simply allow console.debug to be used. It is set to be equivalent to console.info.
console.debug = console.info;

// Disable console logging when not in development.
let debug = true;
if(process.env.NODE_ENV && process.env.NODE_ENV.trim().toUpperCase() == 'DEVELOPMENT') {
	console.info(new Date(), 'Running in', process.env.NODE_ENV.trim());
} else {
	debug = false;
	console.info(new Date(), 'Running in Production');
	console.debug = function() {};
	console.log = function() {};
}

// Create Express instance.
const app: express.Application = express();
// We use this port number to expose our webserver.
const port: number = 3333;

/**
 * Start our Express webserver on the port defined above.
 */
app.listen(port, () => {
	console.info(`Example app listening on port ${port}`);
	// Expose our static files.
	app.use('/js', express.static('./dist/js'));
	// Instantiate our HomeController which handles our homepage routes.
    new HomeController(app, debug);
	// Instantiate our AboutController which handles our about page routes.
    new AboutController(app, debug);
});
