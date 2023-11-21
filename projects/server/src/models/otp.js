import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Otp = sequelize.define(
  "otp",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    email: { type: DataTypes.STRING },
    otp: { type: DataTypes.STRING },
    otpExpired: { type: DataTypes.BIGINT, defaultValue: Date.now() + 24 * 36 * 1e5 },
  },
  { timestamps: false }
);

export default Otp;
