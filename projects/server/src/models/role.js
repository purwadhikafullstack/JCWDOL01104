import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Role = sequelize.define(
  "role",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    role: { type: DataTypes.STRING },
  },
  { timestamps: false }
);

export default Role;
