import sequelize from "../config/db";
import { DataTypes } from "sequelize";

const Review = sequelize.define(
  "review",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING },
    review: { type: DataTypes.STRING },
    clean: { type: DataTypes.NUMBER },
    security: { type: DataTypes.NUMBER },
    comfort: { type: DataTypes.NUMBER },
    satisfied: { type: DataTypes.NUMBER },
  },
  { updatedAt: false }
);

export default Review;
