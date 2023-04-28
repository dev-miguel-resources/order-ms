import { Request, Response } from "express";
import { OrderApplication } from "../../application/order.application";
import { OrderFactory } from "../../domain/order.factory";

export default class {
  constructor(private readonly app: OrderApplication) {
    
    // design pattern Mediator: https://refactoring.guru/es/design-patterns/mediator
    this.insertOrder = this.insertOrder.bind(this);
  }

  async insertOrder(req: Request, res: Response) {
    const { productId, price, quantity } = req.body;

    const order = OrderFactory.create(productId, price, quantity);
    const orderSaved = await this.app.save(order);
    res.json(orderSaved);
  }
}
