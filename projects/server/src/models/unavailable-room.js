import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const UnavailableRoom = sequelize.define(
  "unavailable_room",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    date: { type: DataTypes.BIGINT },
  },
  { timestamps: false }
);

export default UnavailableRoom;
