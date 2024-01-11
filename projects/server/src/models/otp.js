import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Otp = sequelize.define(
  "otp",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    email: { type: DataTypes.STRING },
    otp: { type: DataTypes.STRING },
    email_verified: { type: DataTypes.BOOLEAN, defaultValue: false },
    max_request: { type: DataTypes.INTEGER, defaultValue: 0 },
    refresh_otp: { type: DataTypes.BIGINT, defaultValue: new Date(Date.now() + 24 * 36e5).setHours(0, 0, 0, 0) },
  },
  { timestamps: false }
);

export default Otp;
