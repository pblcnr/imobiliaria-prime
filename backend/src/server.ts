import express from "express";
import { errorHandler } from "./shared/middlewares/index.js";
import { env } from "./config/env.js";
import employeeRoutes from "./modules/employees/routes.js";

const app = express();

app.use(express.json());

// Routes
app.get("/health", (req, res) => {
  res.send({ status: "OK" });
});

app.use("/employees", employeeRoutes);

// Error Handler
app.use(errorHandler);

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});
