import Rooms from "./repositories.js";
import Location from "../../models/location.js";

export default class QueryRoom {
  constructor() {
    this.room = new Rooms();
  }

  async getProperties(query) {
    const params = { include: [{ model: Location }] };
    const data = await this.room.findAllRoom(params);
    return data;
  }

  async getRoomById(roomId) {
    const params = { include: [{ model: Location }], where: { id: roomId } };
    const data = await this.room.findOneRoom(params);
    return data;
  }
}
