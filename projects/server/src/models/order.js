import sequelize from "../config/db";
import { DataTypes } from "sequelize";

const Order = sequelize.define(
  "order",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    status: { type: DataTypes.ENUM(["unpaid", "process", "sussess", "cancel"]) },
  },
  { timestamps: false }
);

export default Order;
