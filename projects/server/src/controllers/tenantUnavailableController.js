import UnavailableRoom from "../models/unavailable-room.js";
import Room from "../models/room.js";
// import { date } from "joi";

Room.hasMany(UnavailableRoom, {
  foreignKey: "room_id",
  sourceKey: "id",
  as: "unavailability",
  hooks: true,
  onDelete: "CASCADE",
});

UnavailableRoom.belongsTo(Room, {
  foreignKey: "room_id",
  as: "room",
  hooks: true,
  onDelete: "CASCADE",
});

UnavailableRoom.sync();
Room.sync();

export const postDisabledRoomData = (req, res) => {
  try {
    const { date } = req.body;
    
    const { id } = req.params;

    UnavailableRoom.create({ date: Date.parse(date), room_id: id });

    return res.status(211).send({ message: "Succesful disable on room" });
  } catch (err) {
    return res.status(401).send({ message: "Fail to disable on room" });
  }
};

export const getDisabledDates = async (req, res) => {
    console.log("Get disabled dates for room_id :", req.params.id);
    try {
      const roomId = req.params.id;
      console.log(roomId);
      const result = await UnavailableRoom.findAll({
        attributes: ["date"],
        where: { room_id: roomId },
      });
    //   console.log(result)
      const dateDataObj=result.map((value)=>value.dataValues);
      console.log(dateDataObj);
      const dateData=dateDataObj.map((value)=>{
        const val=new Date();
        val.setTime(Number(value.date))
    return val;})
      console.log(dateData)
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
