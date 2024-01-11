import Rooms from "./repositories.js";
import QueryRoom from "./query-domain.js";
import AppError from "../../utils/app-error.js";

export default class CommandRoom {
  constructor() {
    this.room = new Rooms();
    this.query = new QueryRoom();
  }

  async addRoom(payload) {
    const { name, price, description, guest, imageUrl, roomInfo, propertyId } = payload;
    const data = {
      name: name,
      price: price,
      description: description,
      guest: guest,
      room_info: roomInfo,
      image_url: imageUrl,
      propertyId: propertyId,
    };
    await this.room.insertOneRoom(data);
  }
}
