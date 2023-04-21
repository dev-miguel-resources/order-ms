import express from 'express';

export default class {
   
    private readonly expressRouter: express.Router;

    constructor() {
        this.expressRouter = express.Router();
    }
}