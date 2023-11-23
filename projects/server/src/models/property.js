import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Property = sequelize.define(
  "property",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    image_url: { type: DataTypes.STRING },
  },
  { timestamps: false }
);

export default Property;
