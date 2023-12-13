import express from "express";
// const db = require("../models")
import { Sequelize } from "sequelize";
// const Property = db.Property;
import sequelize from "sequelize";
import Property from "../models/property.js";
import Room from "../models/room.js";
import Category from "../models/category.js";
import User from "../models/user.js";
import upload from "../helpers/upload.js";
import fs from "fs";


const attributesChosen = ["id", "name", "description", "image_url","category_id"];
Category.hasMany(Property, {
  foreignKey: "category_id",
  sourceKey: "id",
  as: "property",
  hooks : true
});

Property.belongsTo(Category, {
  foreignKey: "category_id",
  as: "category",
  hooks : true
});

User.hasMany(Property, {
  foreignKey: "user_id",
  sourceKey: "id",
  as: "propertyOwned",
  hooks : true
});

Property.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
  hooks : true
});





Property.sync();
Room.sync();
User.sync();

export const getPropertyData = async (req, res) => {
  try {
    console.log("Get Property Data");
    const userId=req.user;
    const result = await Property.findAll({
      attributes: attributesChosen,  include:[{ model: Category, as: 'category' }],where:{user_id:userId}
    });
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

export const postPropertyData = async (req, res) => {
  try {
    const { name, description, category_id} = req.body;
    const userId=req.user;

    const imageURL=`${process.env.SERVER_LINK}/${req.file.filename}`
    const result = await Property.create({name: name, description: description, image_url: imageURL, category_id :category_id ,user_id:userId});

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

    const { name, description, image_url, category_id} = req.body;

    console.log(req.body);

    Property.update(
      { name: name, description: description, image_url: image_url, category_id :category_id },
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
   
    const property = await Property.findByPk(id);
  
    const room = await Room.findAll({attributes:["image_url"], where :{property_id:id}})
  
    //Deleting Property Image
    const path = property.image_url.substring(22);
    fs.unlink(`public/${path}`,(err) => {
      if (err) console.log(err);
    });
    console.log("Property File Deleted")
    //Deleting Room Images
    room.forEach((value)=>{
      const pathRoom= value.dataValues.image_url.substring(22);
      fs.unlink(`public/${pathRoom}`,(err) => {
        if (err) console.log(err);
      });
    })
    console.log("Room File deleted")

    await Property.destroy({
      where: {
        id: id,
      },
      include: [{ model: Room, where: { property_id: id } }],
    });

    return res.status(204).send({
      message: "Property Data Succesfully Deleted",
    });
  } catch(err) {
    return res.send({
      message: err.message,
    });
  }
};
