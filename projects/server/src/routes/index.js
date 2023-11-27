import seedRoutes from "../modules/seed/seed.js";
import authRoutes from "./auth.js";
import userRoutes from "./user.js";
import propertyRoutes from "./property.js";

const routes = { seedRoutes, authRoutes, userRoutes, propertyRoutes };
export default routes;
