import { Router } from "express";
import { EmployeeController } from "./controller.js";

const employeeRoutes = Router();
const employeeController = new EmployeeController();

employeeRoutes.post("/", employeeController.create.bind(employeeController));
employeeRoutes.get("/", employeeController.findAll.bind(employeeController));
employeeRoutes.get(
  "/:id",
  employeeController.findById.bind(employeeController)
);
employeeRoutes.put("/:id", employeeController.update.bind(employeeController));
employeeRoutes.delete(
  "/:id",
  employeeController.delete.bind(employeeController)
);

export default employeeRoutes;
