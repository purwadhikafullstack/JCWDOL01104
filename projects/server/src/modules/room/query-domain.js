import Rooms from "./repositories.js";
import Location from "../../models/location.js";

export default class QueryRoom {
  constructor() {
    this.room = new Rooms();
  }

  async getRooms(query) {
    const params = {};
    const data = await this.room.findAllRoom(params);
    return data;
  }

  async getRoomById(roomId) {
    const params = {};
    const data = await this.room.findOneRoom(params);
    return data;
  }
}
