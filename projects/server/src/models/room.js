import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
import Property from "./property.js";

const Room = sequelize.define(
  "room",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING },
    price: { type: DataTypes.BIGINT },
    description: { type: DataTypes.STRING },
    person: { type: DataTypes.INTEGER },
  },
  { timestamps: false }
);

//Define Associations



export default Room;
