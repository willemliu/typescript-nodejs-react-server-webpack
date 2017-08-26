import * as express from 'express';
import HomeController from "./pages/home/HomeController";

const app: express.Application = express();
const port: number = 3333;

app.listen(port, () => {
    console.info(`Example app listening on port ${port}`);
    app.use('/js', express.static('./dist/js'));
    new HomeController(app);
});
