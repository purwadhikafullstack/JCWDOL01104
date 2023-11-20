import "dotenv/config";

const { DB_PASSWORD, DB_USER, DB_NAME, DB_HOST, DB_PORT, DB_DIALECT } = process.env;

export const sessionConfig = { secret: "Our little secret.", resave: false, saveUninitialized: false };
export const corsConfig = {
  origin: [process.env.CLIENT_LINK, process.env.SERVER_LINK],
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
};

export default {
  DB_PASSWORD: DB_PASSWORD,
  DB_USER: DB_USER,
  DB_NAME: DB_NAME,
  DB_HOST: DB_HOST,
  DB_PORT: DB_PORT,
  DB_DIALECT: DB_DIALECT,
};
