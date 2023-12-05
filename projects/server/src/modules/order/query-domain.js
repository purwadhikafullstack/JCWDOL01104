import { Op } from "sequelize";
import Order from "./repositories.js";
import User from "../../models/user.js";
import Room from "../../models/room.js";
import AppError from "../../utils/app-error.js";

export default class QueryOrder {
  constructor() {
    this.order = new Order();
  }
  async getOrders(query) {
    const params = { include: [{ model: User }, { model: Room }] };
    const data = await this.order.findAllOrder(params);
    return data;
  }

  async getOrderById(orderId) {
    const params = { include: [{ model: User }, { model: Room }], where: { id: orderId } };
    const data = await this.order.findOneOrder(params);
    return data;
  }

  async getOrderByUserId(userId) {
    const params = { include: [{ model: User }, { model: Room }], where: { userId: userId } };
    const data = await this.order.findAllOrder(params);
    return data;
  }

  async getBookOrder(roomId) {
    const params = { include: [{ model: Room }], where: { roomId: 1, start_date: { [Op.gt]: new Date() } } };
    const data = await this.order.findAllOrder(params);
    return data;
  }
}
