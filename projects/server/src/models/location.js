import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Location = sequelize.define(
  "location",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    city: { type: DataTypes.STRING },
    lat: { type: DataTypes.STRING },
    lng: { type: DataTypes.STRING },
  },
  { timestamps: false }
);

export default Location;
