import express, { Application } from "express";
import { OrderInfraestructure } from "./module/infraestructure/order.infraestructure";
import { OrderApplication } from "./module/application/order.application";
import Controller from "./module/interface/http/order.controller";
import OrderRouter from "./module/interface/http/router";

class App {
  private readonly expressApp: Application;

  constructor() {
    this.expressApp = express();
    this.mountMiddlewares();
    this.mountRoutes();
  }

  mountMiddlewares() {
    this.expressApp.use(express.json());
    this.expressApp.use(express.urlencoded({ extended: true }));
  }

  mountRoutes() {

    const infraestructure = new OrderInfraestructure();
    const application = new OrderApplication(infraestructure);
    const controller = new Controller(application);
    const router = new OrderRouter(controller);

    // design pattern Chain of Responsability: https://refactoring.guru/es/design-patterns/chain-of-responsibility
    this.expressApp.use("/order", router.router);
    this.expressApp.use("/", (_req, res) => res.send("All is OK"));
  }

  mountErrors() {
    // pending implementation
  }

  get app() {
    return this.expressApp;
  }
}

export default new App().app;
