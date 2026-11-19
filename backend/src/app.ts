import express from "express";
import cors from "cors";
import helmet from "helmet";

import { env } from "./config/env.js";
import { healthRouter } from "./routes/health.routes.js";

const app = express();

app.disable("x-powered-by");

app.use(helmet());

app.use(cors({
  origin: env.CORS_ORIGIN,
  credentials: true
}));

app.use(express.json({ limit: "1mb" }));

app.get("/api/v1", (_req, res) => {
  res.status(200).json({
    data: {
      name: "SELA API",
      version: "v1"
    }
  });
});

app.use("/api/v1/health", healthRouter);

app.use((_req, res) => {
  res.status(404).json({
    error: {
      code: "ROUTE_NOT_FOUND",
      message: "Endpoint tidak ditemukan."
    }
  });
});

export default app;