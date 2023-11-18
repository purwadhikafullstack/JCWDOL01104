import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Category = sequelize.define(
  "category",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    category: { type: DataTypes.STRING },
  },
  { timestamps: false }
);

export default Category;
