import express, { Application } from "express";

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
    // design pattern Chain of Responsability: https://refactoring.guru/es/design-patterns/chain-of-responsibility
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
