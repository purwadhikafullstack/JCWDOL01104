import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Favorite = sequelize.define(
  "favorite",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    status: { type: DataTypes.BOOLEAN },
  },
  { timestamps: false }
);

export default Favorite;
