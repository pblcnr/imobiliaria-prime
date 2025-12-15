import { Router } from "express";
import { PropertyController } from "./controller.js";

const propertyRoutes = Router();
const propertyController = new PropertyController();

propertyRoutes.post("/", propertyController.create.bind(propertyController));
propertyRoutes.get("/", propertyController.findAll.bind(propertyController));
propertyRoutes.get(
  "/:id",
  propertyController.findById.bind(propertyController)
);
propertyRoutes.put("/:id", propertyController.update.bind(propertyController));
propertyRoutes.delete(
  "/:id",
  propertyController.delete.bind(propertyController)
);

export default propertyRoutes;
