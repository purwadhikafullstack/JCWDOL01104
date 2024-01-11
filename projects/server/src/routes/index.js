import seedRoutes from "../modules/seed/seed.js";
import authRoutes from "./auth.js";
import userRoutes from "./user.js";
import propertyRoutes from "./property.js";
import roomRoutes from "./room.js";
import orderRoutes from "./order.js";
import reviewRoutes from "./review.js";

import tenantCategoryRoutes from "./category.router.js";
import tenantOrderRoutes from "./order.router.js";
import tenantPropertyRoutes from "./property.router.js";
import tenantRoomRoutes from "./room.router.js";
import tenantSpecialPriceRoutes from "./specialPrice.router.js";
import tenantUnavailableRoutes from "./unavailableRoom.router.js";

const routes = {
  seedRoutes,
  authRoutes,
  userRoutes,
  propertyRoutes,
  roomRoutes,
  orderRoutes,
  reviewRoutes,
  tenantCategoryRoutes,
  tenantOrderRoutes,
  tenantPropertyRoutes,
  tenantRoomRoutes,
  tenantSpecialPriceRoutes,
  tenantUnavailableRoutes,
};
export default routes;
