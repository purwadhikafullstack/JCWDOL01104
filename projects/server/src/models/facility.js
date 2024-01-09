import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Facility = sequelize.define(
  "facility",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    facility: { type: DataTypes.STRING },
  },
  { timestamps: false }
);

export default Facility;
