import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
import Property from "./property.js";

const Category = sequelize.define(
  "category",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    category: { type: DataTypes.STRING },
  },
  { timestamps: false }
);

//Define Associations




export default Category;
