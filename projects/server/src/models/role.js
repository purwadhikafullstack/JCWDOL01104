import sequelize from "../config/db";
import { DataTypes } from "sequelize";

const Role = sequelize.define(
  "role",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING },
  },
  { timestamps: false }
);

export default Role;
