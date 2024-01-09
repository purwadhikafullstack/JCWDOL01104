import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";
import session from "express-session";
import propertyRoutes from "../server/src/routers/property.router.js";
import roomRoutes from "../server/src/routers/room.router.js";
import categoryRoutes from "../server/src/routers/category.router.js";
import specialPriceRoutes from "./src/routers/specialPrice.router.js";
import unavailableRoomRoutes from "./src/routers/unavailableRoom.router.js";
import orderRoutes from "./src/routers/order.router.js";
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
app.use("/api/categoryList", categoryRoutes);
app.use("/api/roomList", roomRoutes);
app.use("/api/specialPrice", specialPriceRoutes);
app.use("/api/disableRoom", unavailableRoomRoutes);
app.use("/api/orderList", orderRoutes);
app.use("/api/secret/seed", routes.seedRoutes);
app.use("/auth", routes.authRoutes);
app.use("/api/user", routes.userRoutes);
app.use("/api/property", routes.propertyRoutes);
app.use("/api/room", routes.roomRoutes);
app.use("/api/order", routes.orderRoutes);
app.use("/api/review", routes.reviewRoutes);

app.use(errorHandler);
app.use(notFound);

app.listen(PORT, () => console.log(`Server is Running on PORT:${PORT}`));
