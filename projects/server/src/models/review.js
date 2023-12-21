import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Review = sequelize.define(
  "review",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    review: { type: DataTypes.TEXT },
    clean: { type: DataTypes.INTEGER },
    security: { type: DataTypes.INTEGER },
    satisfied: { type: DataTypes.INTEGER },
    service: { type: DataTypes.INTEGER },
    createdAt: { type: DataTypes.DATE },
  },
  { updatedAt: false }
);

export default Review;
