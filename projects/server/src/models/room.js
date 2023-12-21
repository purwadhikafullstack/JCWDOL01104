import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
import Property from "./property.js";

const Room = sequelize.define(
  "room",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER },
    description: { type: DataTypes.TEXT },
    guest: { type: DataTypes.INTEGER },
    room_info: { type: DataTypes.STRING },
    image_url: { type: DataTypes.TEXT },
  },
  { timestamps: false }
);

//Define Associations

export default Room;
