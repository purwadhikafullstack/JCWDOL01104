import express from "express";
// const db = require("../models")
import { Sequelize } from "sequelize";
// const Property = db.Property;
import sequelize from "sequelize";
import Property from "../models/property.js";
import Category from "../models/category.js";

Property.sync();
Category.sync();

const attributesChosen = ["id", "category"];

export const getAllCategory = async (req, res) => {
  try {
    console.log("Get Category Data");

    const result = await Property.findAll({
      attributes: attributesChosen,
    });

    const dataValuesArray = result.map((result) => result.dataValues);

    return res.status(200).send({
      message: "Product Data Succesfully Retrieved",
      data: dataValuesArray,
    });
  } catch (err) {
    return res.send({
      message: err.message,
    });
  }
};

export const getPropertyCategory = async (req, res) => {
  try {
    console.log("Get Specific Property Category Data");

    const { id } = req.params;

    const result = await Category.findAll({
      attributes: attributesChosen,
      where: { id: id },
    });

    return res.status(200).send({
      message: "Category Data Succesfully Retrieved",
      data: result,
    });
  } catch (err) {
    return res.send({
      message: err.message,
    });
  }
};
