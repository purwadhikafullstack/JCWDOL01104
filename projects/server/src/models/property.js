import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
import Room from "./room.js";
import Category from "./category.js";

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

// Define Associations



export default Property;
