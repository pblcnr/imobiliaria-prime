import express from "express";
import { errorHandler } from "./shared/middlewares/index.js";
import { env } from "./config/env.js";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.send({ status: "OK" });
});

app.use(errorHandler);

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});
