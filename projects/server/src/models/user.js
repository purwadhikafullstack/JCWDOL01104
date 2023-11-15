import sequelize from "../config/db";
import { DataTypes } from "sequelize";

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  id_card: { type: DataTypes.STRING },
  name: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  phone_number: { type: DataTypes.STRING },
  birthdate: { type: DataTypes.BIGINT },
  gender: { type: DataTypes.ENUM(["male", "female"]) },
  image_url: { type: DataTypes.STRING },
  is_active: { type: DataTypes.BOOLEAN },
});

export default User;
