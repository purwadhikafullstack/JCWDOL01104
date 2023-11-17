import { Sequelize } from "sequelize";
import config from "./config.js";

const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
  port: config.DB_PORT,
  host: config.DB_HOST,
  dialect: config.DB_DIALECT,
  pool: { max: 5, min: 0, acquire: 3e4, idle: 1e4 },
});

export const connetionMysql = async () => {
  try {
    sequelize.authenticate();
    sequelize.sync();
    // sequelize.sync({ alter: true });
    // sequelize.sync({ force: true });
    console.log("Success Connect Mysql DB");
  } catch (error) {
    console.log("Error", error);
  }
};

export default sequelize;
