import Room from "../../models/room.js";
import Property from "../../models/property.js";
import Order from "../../models/order.js";
import Review from "../../models/review.js";

Room.belongsTo(Property);
Room.hasMany(Order);

Room.hasMany(Review);

export default class Rooms {
  async findAllRoom(params) {
    const result = await Room.findAll(params);
    return result;
  }

  async findOneRoom(params) {
    const result = await Room.findOne(params);
    return result;
  }

  async insertManyRoom(data) {
    const result = await Room.bulkCreate(data);
    return result;
  }

  async insertOneRoom(data) {
    const result = await Room.create(data);
    return result;
  }

  async updateOneRoom(data, params) {
    const result = await Room.update(data, params);
    return result;
  }
}
