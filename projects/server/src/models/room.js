import sequelize from "../config/db";
import { DataTypes } from "sequelize";

const Room = sequelize.define(
  "room",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING },
    price: { type: DataTypes.NUMBER },
    description: { type: DataTypes.STRING },
    person: { type: DataTypes.NUMBER },
  },
  { timestamps: false }
);

export default Room;
