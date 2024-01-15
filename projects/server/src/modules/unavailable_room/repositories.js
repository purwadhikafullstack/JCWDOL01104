import UnavailableRoom from "../../models/unavailable-room.js";
import Room from "../../models/room.js";

UnavailableRoom.sync();
UnavailableRoom.belongsTo(Room);

export default class UnavailableRooms {
  async findManyUnavailableRoom(params) {
    const result = await UnavailableRoom.findAll(params);
    return result;
  }

  async findOneUnavailableRoom(params) {
    const result = await UnavailableRoom.findOne(params);
    return result;
  }

  async insertManyUnavailableRoom(data) {
    const result = await UnavailableRoom.bulkCreate(data);
    return result;
  }
}
