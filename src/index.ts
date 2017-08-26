import * as express from 'express';
import HomeController from "./pages/home/HomeController";

declare var process: any;

console.debug = console.info;

let debug = true;
if(process.env.NODE_ENV && process.env.NODE_ENV.trim().toUpperCase() == 'DEVELOPMENT') {
	console.info(new Date(), 'Running in', process.env.NODE_ENV.trim());
} else {
	debug = false;
	console.info(new Date(), 'Running in Production');
	console.debug = function() {};
	console.log = function() {};
}

const app: express.Application = express();
const port: number = 3333;

app.listen(port, () => {
    console.info(`Example app listening on port ${port}`);
    app.use('/js', express.static('./dist/js'));
    new HomeController(app, debug);
});
