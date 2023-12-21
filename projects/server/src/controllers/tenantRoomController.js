import express from "express";
import { Sequelize } from "sequelize";
import sequelize from "sequelize";
import Room from "../models/room.js";
import Property from "../models/property.js";
import fs from "fs";
const attributesChosen = [
  "id",
  "name",
  "price",
  "description",
  "person",
  "image_url",
  "room_info",
];

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
    console.log("file", imageURL);
    console.log("id properti", propId);
    console.log("body", req.body);
    const newRoom = await Room.create({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      person: req.body.person,
      image_url: imageURL,
      room_info:req.body.room_info,
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
    const room = await Room.findByPk(id);
    console.log(room.image_url)
    const path = room.image_url.substring(22);
    fs.unlink(`public/${path}`,(err) => {
      if (err) console.log(err);
    });
    console.log(id)
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
