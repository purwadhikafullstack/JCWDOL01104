import express from "express";
// const db = require("../models")
import { Sequelize } from "sequelize";
// const Property = db.Property;
import sequelize from "sequelize";
import Property from "../models/property";

const attributesChosen =["product_name", "stock","description", "image"];
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

export const getPropertyData = async(req,res) =>{

    try {
        console.log("udah nyambung");
    console.log("apajadehhhhhhhhhh");
const result =await Property.findAll({
    attributes: attributesChosen,
  });

  const dataValuesArray=result.map((result)=>result.dataValues)

  return res.status(200).send({
    message: "Product Data Succesfully Retrieved",
    data: dataValuesArray,
  });

    }
    catch(err)
    {
        return res.send({
            message: err.message,
          });
    }
}