import { InternalServerErrorException } from "../../core/exceptions/internalServer.exception";
import { Order } from "../domain/order";
import { OrderRepository } from "../domain/repositories/order.repository";

export class OrderApplication {
  private repositoryOrder: OrderRepository;

  // design pattern Dependency Injection: https://desarrolloweb.com/articulos/patron-diseno-contenedor-dependencias.html
  constructor(repository: OrderRepository) {
    this.repositoryOrder = repository;
  }

  async save(order: Order): Promise<Order> {
    const orderResult = await this.repositoryOrder.save(order);
    if (orderResult.isErr()) {
      throw new InternalServerErrorException(orderResult.error.message);
    }

    return orderResult.value;
  }
}
