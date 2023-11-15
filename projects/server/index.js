import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

import { connetionMysql } from "./src/config/db.js";

const app = express();
const PORT = process.env.PORT || 8080;

connetionMysql();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

app.listen(PORT, () => console.log(`Server is Running on PORT:${PORT}`));
