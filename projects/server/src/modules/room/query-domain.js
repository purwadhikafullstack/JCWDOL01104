import Rooms from "./repositories.js";
import Order from "../../models/order.js";

export default class QueryRoom {
  constructor() {
    this.room = new Rooms();
  }

  async getRooms(query) {
    const params = { include: [{ model: Order }] };
    const data = await this.room.findAllRoom(params);
    return data;
  }

  async getRoomById(roomId) {
    const params = { include: [{ model: Order }], where: { id: roomId } };
    const data = await this.room.findOneRoom(params);
    return data;
  }
}
