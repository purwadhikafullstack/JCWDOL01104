import seedRoutes from "../modules/seed/seed.js";
import authRoutes from "./auth.js";
import userRoutes from "./user.js";
import propertyRoutes from "./property.js";
import roomRoutes from "./room.js";
import orderRoutes from "./order.js";
import reviewRoutes from "./review.js";

const routes = { seedRoutes, authRoutes, userRoutes, propertyRoutes, roomRoutes, orderRoutes, reviewRoutes };
export default routes;
