import Order from "../../models/order.js";
import Room from "../../models/room.js";
import User from "../../models/user.js";

Order.sync();
Order.belongsTo(Room);
Order.belongsTo(User);

export default class Orders {
  async findAndCountAllOrder(params) {
    const result = await Order.findAndCountAll(params);
    return result;
  }

  async findAllOrder(params) {
    const result = await Order.findAll(params);
    return result;
  }

  async findOneOrder(params) {
    const result = await Order.findOne(params);
    return result;
  }

  async insertOneOrder(data) {
    const result = await Order.create(data);
    return result;
  }

  async updateOneOrder(data, params) {
    const result = await Order.update(data, params);
    return result;
  }
}
