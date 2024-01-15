import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const SpecialPrice = sequelize.define(
  "special_price",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    percentage: { type: DataTypes.DECIMAL },
    price: { type: DataTypes.DECIMAL },
    date: { type: DataTypes.BIGINT },
  },
  { timestamps: false }
);

export default SpecialPrice;
