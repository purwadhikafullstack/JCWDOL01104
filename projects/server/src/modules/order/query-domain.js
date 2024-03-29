import { Op } from "sequelize";
import Order from "./repositories.js";
import UnavailableRooms from "../unavailable_room/repositories.js";
import User from "../../models/user.js";
import Room from "../../models/room.js";

export default class QueryOrder {
  constructor() {
    this.order = new Order();
    this.unavailableRooms = new UnavailableRooms();
  }
  async getOrders(query) {
    const { limit } = query;
    const params = { include: [{ model: User }, { model: Room }], limit: limit || 6 };
    const data = await this.order.findAndCountAllOrder(params);
    return data;
  }

  async getOrderById(orderId) {
    const params = { include: [{ model: User }, { model: Room }], where: { id: orderId } };
    const data = await this.order.findOneOrder(params);
    return data;
  }

  async getOrderByUserId(userId) {
    const params = {
      include: [{ model: Room }],
      where: { userId: userId },
      order: [["createdAt", "desc"]],
    };

    const data = await this.order.findAndCountAllOrder(params);
    return data;
  }

  async getOrderRoom(roomId) {
    const params = {
      include: [{ model: Room }],
      where: { roomId: roomId, start_date: { [Op.gt]: new Date() } },
    };

    const data = await this.order.findAllOrder(params);
    return data;
  }

  async getBookOrder(query) {
    const { roomId, start, end } = query;

    const params = {
      where: {
        roomId: roomId,
        [Op.and]: [
          {
            start_date: { [Op.gte]: start },
            end_date: { [Op.lte]: end },
            [Op.or]: [{ status: "unconfirm" }, { status: "success" }, { status: "unpaid" }, { status: "rejected" }],
          },
        ],
      },
    };

    const paramsUnavailableRoom = {
      where: {
        roomId: roomId,
        date: new Date(Number(start)).setHours(0, 0, 0, 0),
      },
    };

    const data = await this.order.findAllOrder(params);
    const unavailableRooms = await this.unavailableRooms.findOneUnavailableRoom(paramsUnavailableRoom);

    if (data.length > 0 || unavailableRooms) return true;
    else return false;
  }
}
