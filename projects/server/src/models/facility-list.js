import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const FacilityList = sequelize.define(
  "facility_list",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  },
  { timestamps: false }
);

export default FacilityList;
