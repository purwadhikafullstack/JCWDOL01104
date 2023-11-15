import sequelize from "../config/db";
import { DataTypes } from "sequelize";

const Wishlist = sequelize.define(
  "wishlist",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    status: { type: DataTypes.BOOLEAN },
  },
  { timestamps: false }
);

export default Wishlist;
