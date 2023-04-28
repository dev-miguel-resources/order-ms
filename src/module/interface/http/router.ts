import express from 'express';
import Controller from './order.controller';

export default class {
   
    private readonly expressRouter: express.Router;

    constructor(private readonly controller: Controller) {
        this.expressRouter = express.Router();
        this.mountRoutes();
    }

    mountRoutes() {
        this.expressRouter.post("/", this.controller.insertOrder);
    }

    get router() {
        return this.expressRouter;
    }
}