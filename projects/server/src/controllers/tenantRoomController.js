import Room from "../models/room.js";
import Property from "../models/property.js";
import Order from "../models/order.js";
import UnavailableRoom from "../models/unavailable-room.js";
import SpecialPrice from "../models/special-price.js";
import User from "../models/user.js";
import { Op } from "sequelize";
import fs from "fs";
const attributesChosen = ["id", "name", "price", "description", "guest", "image_url", "room_info"];

// Property.hasMany(Room, {
//   foreignKey: "property_id",
//   sourceKey: "id",
//   as: "rooms",
//   hooks: true,
//   onDelete: "CASCADE",
// });

// Room.belongsTo(Property, {
//   foreignKey: "property_id",
//   as: "property",
//   hooks: true,
//   onDelete: "CASCADE",
// });

Room.sync();
Property.sync();

export const addRoomToProperty = async (req, res) => {
  try {
    const propId = req.params.id;
    const imageURL = `${process.env.SERVER_LINK}/${req.file.filename}`;
    const newRoom = await Room.create({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      guest: req.body.guest,
      image_url: imageURL,
      room_info: req.body.room_info,
      propertyId: propId,
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
  try {
    const propId = req.params.id;

    const result = await Room.findAll({
      attributes: attributesChosen,
      where: { propertyId: propId },
    });

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

    const { name, price, description, guest } = req.body;
    const room = await Room.findByPk(id);
    const pathLength = process.env.SERVER_LINK.length;
    const path = room.dataValues.image_url.substring(pathLength + 1);

    fs.unlink(join(__dirname, `../public/${path}`), (err) => {
      if (err) console.log(err);
    });

    const imageURL = `${process.env.SERVER_LINK}/${req.file.filename}`;

    Room.update(
      {
        name: name,
        price: price,
        description: description,
        guest: guest,
        image_url: imageURL,
      },
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

    const orders = await Order.findAll({ where: { roomId: id } });

    if (orders.length === 0) {
      const room = await Room.findByPk(id);
      const pathLength = process.env.SERVER_LINK.length;
      const path = room.dataValues.image_url.substring(pathLength + 1);

      fs.unlink(join(__dirname, `../public/${path}`), (err) => {
        if (err) console.log(err);
      });
      await Room.destroy({
        where: {
          id: id,
        },
      });
      return res.status(208).send({
        message: "Room Data Succesfully Deleted",
      });
    } else {
      return res.status(500).send({
        message: "Room Cannot Be Deleted, There are Orders Associated with the room",
      });
    }
  } catch (err) {
    return res.send({
      message: ("Error deleting Room", err.message),
    });
  }
};

export const getOccupancyData = async (req, res) => {
  try {
    const userId = req.user;
    const date = BigInt(req.params.date);
    const dateInMilis = Number(date);
    const startOfDay = new Date(dateInMilis).setHours(0, 0, 0, 0);
    const endOfDay = new Date(dateInMilis).setHours(23, 59, 59, 999);

    const result = await Property.findAll({
      attributes: ["id", "name"],
      where: { userId: userId },
      include: [
        {
          model: Room,
          as: "rooms",
          attributes: ["id", "name", "price"],
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
        const roomPrice = room.dataValues.price;
        const orders = await Order.findAll({
          attributes: ["start_date", "end_date", "status"],
          where: {
            roomId: roomId,
            start_date: { [Op.lte]: date },
            end_date: { [Op.gte]: date },
            status: "success",
          },
        });
        const unavailable = await UnavailableRoom.findOne({
          attributes: ["date"],
          where: {
            roomId: roomId,
            date: {
              [Op.between]: [startOfDay, endOfDay],
            },
          },
        });
        const special = await SpecialPrice.findOne({
          where: {
            propertyId: propertyId,
            date: { [Op.between]: [startOfDay, endOfDay] },
          },
        });
        const percentage = special ? parseFloat(special.dataValues?.percentage || "0") : 0;
        const nominalPrice = special ? parseFloat(special.dataValues?.price || "0") : 0;

        const roomFinalPrice = (special && roomPrice * (1 + percentage / 100) + nominalPrice) || roomPrice;

        const availability = orders.length > 0 || unavailable ? "unavailable" : "available";

        roomsData.push({
          room_id: roomId,
          room_name: roomName,
          room_price: roomFinalPrice,
          availability: availability,
        });
      }

      occupancyData[propertyId] = {
        name: propertyName,
        rooms: roomsData,
      };
    }

    return res.status(220).send({
      message: "Occupancy Data Succesfully Acquired",
      data: occupancyData,
    });
  } catch (err) {
    return res.send({
      message: err.message,
    });
  }
};
