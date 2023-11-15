import sequelize from "../config/db";
import { DataTypes } from "sequelize";

const Category = sequelize.define(
  "category",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING },
  },
  { timestamps: false }
);

export default Category;
