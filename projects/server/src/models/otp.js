import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Otp = sequelize.define(
  "otp",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    email: { type: DataTypes.STRING },
    otp: { type: DataTypes.STRING },
    verified: { type: DataTypes.BOOLEAN, defaultValue: false },
    max_request: { type: DataTypes.INTEGER, defaultValue: 0 },
    refresh_otp: { type: DataTypes.BIGINT, defaultValue: Date.now() + 24 * 36 * 1e5 },
  },
  { timestamps: false }
);

export default Otp;
