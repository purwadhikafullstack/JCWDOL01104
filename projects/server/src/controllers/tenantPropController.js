import express from "express";
// const db = require("../models")
import { Sequelize } from "sequelize";
// const Property = db.Property;
import sequelize from "sequelize";
import Property from "../models/property.js";
import Room from "../models/room.js";
import Category from "../models/category.js";
import User from "../models/user.js";

const attributesChosen = ["id", "name", "description", "image_url", "category_id"];
Category.hasMany(Property, {
  foreignKey: "category_id",
  sourceKey: "id",
  as: "property",
  hooks: true,
});

Property.belongsTo(Category, {
  foreignKey: "category_id",
  as: "category",
  hooks: true,
});

User.hasMany(Property, {
  foreignKey: "user_id",
  sourceKey: "id",
  as: "propertyOwned",
  hooks: true,
});

Property.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
  hooks: true,
});

Property.sync();
Room.sync();
User.sync();

export const getPropertyData = async (req, res) => {
  try {
    console.log("Get Property Data");
    const userId = req.params.id;
    console.log(req.params);

    const result = await Property.findAll({
      attributes: attributesChosen,
      include: [{ model: Category, as: "category" }],
      where: { user_id: userId },
    });

    console.log(result);

    // const dataValuesArray = result.map((result) => result.dataValues);

    return res.status(200).send({
      message: "Property Data Succesfully Retrieved",
      data: result,
    });
  } catch (err) {
    return res.send({
      message: err.message,
    });
  }
};

const property = async (data) => {
  console.log("properti", result);
  return result;
};

export const postPropertyData = async (req, res) => {
  try {
    const { name, description, image_url, category_id } = req.body;
    const userId = req.params.id;
    const result = await Property.create({
      name: name,
      description: description,
      image_url: image_url,
      category_id: category_id,
      user_id: userId,
    });

    return res.status(202).send({
      message: "Property Data Succesfully Posted",
      data: result,
    });
  } catch (err) {
    return res.send({
      message: err.message,
    });
  }
};

export const editPropertyData = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("PropertyEdit Server :", id);

    const { name, description, image_url, category_id } = req.body;

    console.log(req.body);

    Property.update(
      { name: name, description: description, image_url: image_url, category_id: category_id },
      { where: { id: id } }
    );

    return res.status(203).send({
      message: "Property Data Succesfully Updated",
    });
  } catch (err) {
    return res.send({
      message: err.message,
    });
  }
};

export const deletePropertyData = async (req, res) => {
  try {
    const { id } = req.params;
    // const propertyToDelete=await Property.findByPk(id);

    // if (!propertyToDelete){
    //   return res.status(404).send({
    //     message: "Property not found",
    //   });
    // }

    // await propertyToDelete.destroy({ include: Room });

    await Property.destroy({
      where: {
        id: id,
      },
      include: [{ model: Room, where: { property_id: id } }],
    });

    // Find all rooms associated with the property
    // const roomsToDelete = await Room.findAll({
    //   where: {
    //     property_id: id,
    //   },
    // });

    // // Delete each associated room
    // await Promise.all(roomsToDelete.map(room => room.destroy()));

    // // Now, delete the property
    // await Property.destroy({
    //   where: {
    //     id: id,
    //   },
    // });

    return res.status(204).send({
      message: "Property Data Succesfully Deleted",
    });
  } catch (err) {
    return res.send({
      message: err.message,
    });
  }
};
