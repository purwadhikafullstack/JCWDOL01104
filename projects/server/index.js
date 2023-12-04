import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";
import session from "express-session";
import propertyRoutes from "../server/src/routers/property.router.js";
import roomRoutes from "../server/src/routers/room.router.js"
import categoryRoutes from "../server/src/routers/category.router.js"

import { connetionMysql } from "./src/config/db.js";
import { corsConfig, sessionConfig } from "./src/config/config.js";
import errorHandler from "./src/utils/error-handler.js";
import notFound from "./src/utils/not-found.js";
import passportConfig from "./src/modules/auth/passport.js";
import routes from "./src/routes/index.js";

const app = express();
const PORT = process.env.PORT || 8080;

connetionMysql();
passportConfig(passport);

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsConfig));
app.use(morgan("dev"));
app.use(helmet());
app.use(session(sessionConfig));

app.use("/api/propertyList", propertyRoutes);
app.use("/api/categoryList",categoryRoutes)
app.use ("/api/roomList",roomRoutes);
app.use("/api/secret/seed", routes.seedRoutes);
app.use("/auth", routes.authRoutes);
app.use("/api/user", routes.userRoutes);
app.use("/api/property", routes.propertyRoutes);
app.use("/api/room", routes.roomRoutes);

app.use(errorHandler);
app.use(notFound);

// app.use("/api/productListData", productRoutes);



console.log("Port Running")

app.listen(PORT, () => console.log(`Server is Running on PORT:${PORT}`));
