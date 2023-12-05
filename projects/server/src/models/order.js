import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Order = sequelize.define(
  "order",
  {
    // id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    id: { type: DataTypes.STRING, primaryKey: true },
    status: { type: DataTypes.ENUM(["unpaid", "unconfirm", "sussess", "expired", "cancel", "rejected"]) },
    start_date: { type: DataTypes.BIGINT },
    end_date: { type: DataTypes.BIGINT },
    total_price: { type: DataTypes.INTEGER },
    guest: { type: DataTypes.INTEGER },
    image_url: { type: DataTypes.TEXT },
    expired: { type: DataTypes.BIGINT },
  },
  { updatedAt: false }
);

export default Order;
