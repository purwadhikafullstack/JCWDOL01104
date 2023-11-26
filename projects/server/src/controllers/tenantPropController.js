import express from "express";
// const db = require("../models")
import { Sequelize } from "sequelize";
// const Property = db.Property;
import sequelize from "sequelize";
import Property from "../models/property.js";

const attributesChosen = ["id", "name", "description", "image_url"];
Property.sync();

// export const totalProperty = async (req:any, res: any) => {
//   try {
//     // console.log("udah nyambung");
//     // console.log("apajadehhhhhhhhhh");
//     const result = await Products.findAll({
//       attributes: [
//         [sequelize.fn("COUNT", sequelize.col("product_id")), "productCount"],
//       ],
//     });

//     //console.log(result[0].dataValues.productCount);
//     return res.status(200).send({
//         message: "Total product acquired",
//         data: result[0].dataValues.productCount,
//       });
//   } catch (err: any) {
//     return res.send({
//       message: err.message,
//     });
//   }
// };

export const getPropertyData = async (req, res) => {
  try {
    console.log("udah nyambung");
    console.log("apajadehhhhhhhhhh");
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

const property = async (data) => {
  console.log("properti", result);
  return result;
};

export const postPropertyData = async (req, res) => {
  try {
    console.log(req.body);
    // const { name, description, image_url } = req.body;
    // const data = { name: name, description: description, image_url: image_url };

    // console.log(data);
    const result = await Property.create(req.body);

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

    const { name, desccription, image_url } = req.body;

    console.log(req.body);

    Property.update(
      { name: name, description: desccription, image_url: image_url },
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
    await Property.destroy({
      where: {
        id: id,
      },
    });

    return res.status(204).send({
      message: "Property Data Succesfully Deleted",
    });
  } catch {
    return res.send({
      message: err.message,
    });
  }
};
