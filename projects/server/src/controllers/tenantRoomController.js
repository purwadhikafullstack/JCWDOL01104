import Room from "../models/room.js";
import Property from "../models/property.js";
import Order from "../models/order.js";
import UnavailableRoom from "../models/unavailable-room.js";
import User from "../models/user.js";
import Op from "sequelize";
import fs from "fs";
const attributesChosen = [
  "id",
  "name",
  "price",
  "description",
  "guest",
  "image_url",
  "room_info",
];

Property.hasMany(Room, {
  foreignKey: "property_id",
  sourceKey: "id",
  as: "rooms",
  hooks: true,
  onDelete: "CASCADE",
});

Room.belongsTo(Property, {
  foreignKey: "property_id",
  as: "property",
  hooks: true,
  onDelete: "CASCADE",
});

Room.sync();
Property.sync();

export const addRoomToProperty = async (req, res) => {
  try {
    const propId = req.params.id;
    const imageURL = `${process.env.SERVER_LINK}/${req.file.filename}`;
    console.log("file", imageURL);
    console.log("id properti", propId);
    console.log("body", req.body);
    const newRoom = await Room.create({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      person: req.body.guest,
      image_url: imageURL,
      room_info: req.body.room_info,
      property_id: propId,
    });

    return res.status(205).send({
      message: "Room added to property successfully",
      data: newRoom,
    });
  } catch (err) {
    return res.send({
      message: err.message,
    });
  }
};

export const getRoomsInProperty = async (req, res) => {
  console.log("Get room data for property id :", req.params.id);
  try {
    const propId = req.params.id;

    const result = await Room.findAll({
      attributes: attributesChosen,
      where: { property_id: propId },
    });

    // const dataValuesArray = result.map((result) => result.dataValues);
    // console.log(result);

    // const data =res.status(206).send({
    //   message: "Room Data Retrieved Succesfully",
    //   data: dataValuesArray,
    // });

    // console.log(data)

    return res.status(206).send({
      message: "Room Data Retrieved Succesfully",
      data: result,
    });
  } catch (err) {
    return res.send({
      message: err.message,
    });
  }
};

export const updateRoomData = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Room Edit ID :", id);

    const { name, price, description, guest } = req.body;

    console.log(req.body);

    Room.update(
      { name: name, price: price, description: description, guest: guest },
      { where: { id: id } }
    );

    return res.status(207).send({
      message: "Room Data Succesfully Updated",
    });
  } catch (err) {
    return res.send({
      message: err.message,
    });
  }
};

export const deleteRoomData = async (req, res) => {

  try {
    const { id } = req.params;
    const room = await Room.findByPk(id);
    console.log(room.image_url);
    const path = room.image_url.substring(22);
    fs.unlink(`public/${path}`, (err) => {
      if (err) console.log(err);
    });
    console.log(id);
    await Room.destroy({
      where: {
        id: id,
      },
    });
    return res.status(208).send({
      message: "Room Data Succesfully Deleted",
    });
  } catch {
    return res.send({
      message: "Error deleting Property",
    });
  }
};

export const getOccupancyData = async (req, res) => {
  try {
    const userId = req.user;
    const date = req.params.date;

    const result = await Property.findAll({
      attributes: ["id", "name"],
      where: { user_id: userId },
      include: [
        {
          model: Room,
          as: "rooms",
          attributes: ["id", "name"],
        },
      ],
    });


    const occupancyData = {};

    for (const property of result) {
      const propertyId = property.dataValues.id;
      const propertyName = property.dataValues.name;

      const roomsData = [];

      for (const room of property.rooms) {
        const roomId = room.dataValues.id;
        const roomName = room.dataValues.name;
        console.log("here1")
        const orders = await Order.findAll({
          attributes: ["start_date", "end_date","status"],
          where: {
            roomId: roomId,
            start_date: { [Op.lte]: date },
            end_date: { [Op.gte]: date },
            status : "sussess"
          },
        });
       
        const unavailable = await UnavailableRoom.findOne({
          attributes: ["date"],
          where: {
            room_id: roomId,
            date: date,
          },
        });

       
        const availability = orders.length > 0 || unavailable ? "unavailable" : "available";

        roomsData.push({
          room_id: roomId,
          room_name: roomName,
          availability: availability,
        });
      }

      occupancyData[propertyId] = {
        name: propertyName,
        rooms: roomsData,
      };
    }


    // const rooms58 = occupancyData[58].rooms;
     console.log("HERE IS THE DATA:", occupancyData[58]);

    return res.status(220).send({
      message: "Occupancy Data Succesfully Acquired",
      data: occupancyData,
    });
  } catch {
    return res.send({
      message: "Error acquiring occupancy data",
    });
  }  
};

// const result = await User.findByPk(userId, {
//   include: [
//     {
//       model: Property,
//       as: "propertyOwned",
//       include: [
//         {
//           model: Room,
//           as: "rooms",
//           include: [
//             { model: Order, as: "orders" },
//             { model: UnavailableRoom, as: "unavailability" },
//           ],
//         },
//       ],
//     },
//   ],
// });
// console.log(result.dataValues.propertyOwned[0].rooms.dataValues.unavailability);

// const order=
// cosnt disable=
