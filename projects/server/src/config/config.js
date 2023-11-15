import "dotenv/config";

const { DB_PASSWORD, DB_USER, DB_NAME, DB_HOST, DB_PORT, DB_DIALECT } = process.env;

export default {
  DB_PASSWORD: DB_PASSWORD,
  DB_USER: DB_USER,
  DB_NAME: DB_NAME,
  DB_HOST: DB_HOST,
  DB_PORT: DB_PORT,
  DB_DIALECT: DB_DIALECT,
};
