import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import propertyRoutes from "../server/src/routers/property.router.js"

import { connetionMysql } from "./src/config/db.js";

const app = express();
const PORT = process.env.PORT || 8080;

connetionMysql();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());


app.use ("/api/propertyList",propertyRoutes);
// app.use("/api/productListData", productRoutes);



console.log("helo")

app.listen(PORT, () => console.log(`Server is Running on PORT:${PORT}`));
