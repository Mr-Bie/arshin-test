// Dependencies
import * as express from "express";
import {Express, Request, Response} from "express";

// Utils
// import responseMiddleware from "./middlewares/response.middleware";
import {errorHandlerMiddleware} from "./middlewares/error-handler.middleware";
import morganMiddleware from "./middlewares/morgan.middleware";
import router from "./routes/router";
import loggerService from "./services/logger.service";

export default class App {
    private readonly app: Express;
    private readonly port: number = 8080;
    constructor() {
        this.app = express();
        this.port = Number(process.env.APP_PORT) || this.port;
        this.init();
    }

    private init() {
        // this.app.use(responseMiddleware);

        // add body parser
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));

        // add morgan
        this.app.use(morganMiddleware);

        // add all routes
        this.app.use(router);

        // error handler
        this.app.use(errorHandlerMiddleware);

        this.app.listen(this.port, () => {
            loggerService.info(`server running on port ${this.port}.`);
        });
    }

}