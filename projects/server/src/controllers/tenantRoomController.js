import express from "express";
import { Sequelize } from "sequelize";
import sequelize from "sequelize";
import Room from "../models/room.js";
import Property from "../models/property.js";

const attributesChosen = ["id", "name", "price", "description", "person"];

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
    console.log(propId);
    console.log(req.body);
    console.log(Room.property_id);
    const newRoom = await Room.create({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      person: req.body.person,
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

    const { name, price, description, person } = req.body;

    console.log(req.body);

    Room.update({ name: name, price: price, description: description, person: person }, { where: { id: id } });

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
    await Room.destroy({
      where: {
        id: id,
      },
    });

    return res.status(208).send({
      message: "Room Succesfully Deleted",
    });
  } catch {
    return res.send({
      message: err.message,
    });
  }
};
