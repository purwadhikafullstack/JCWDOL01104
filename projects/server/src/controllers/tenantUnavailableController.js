import UnavailableRoom from "../models/unavailable-room.js";
import Room from "../models/room.js";

Room.hasMany(UnavailableRoom);

UnavailableRoom.belongsTo(Room);

UnavailableRoom.sync();
Room.sync();

export const postDisabledRoomData = (req, res) => {
  try {
    const { date } = req.body;

    const { id } = req.params;

    const dateBigInt= Date.parse(date);
    const dateUpdate = new Date(dateBigInt).setHours(14, 0, 0, 0);

    UnavailableRoom.create({ date: dateUpdate, roomId: id });

    return res.status(211).send({ message: "Succesful disable on room" });
  } catch (err) {
    return res.status(401).send({ message: "Fail to disable on room" });
  }
};

export const getDisabledDates = async (req, res) => {
  try {
    const roomId = req.params.id;
    const result = await UnavailableRoom.findAll({
      attributes: ["date"],
      where: { roomId: roomId },
    });
    const dateDataObj = result.map((value) => value.dataValues);
    const dateData = dateDataObj.map((value) => {
      const val = new Date();
      val.setTime(Number(value.date));
      val.setHours(0,0,0,0);
      return val;
    });
    return res.status(212).send({
      message: "Data Retrieved Succesfully",
      data: dateData,
    });
  } catch (err) {
    return res.send({
      message: err.message,
    });
  }
};
