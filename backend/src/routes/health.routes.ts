import { Router } from "express";

export const healthRouter = Router();

healthRouter.get("/", (_req, res) => {
  res.status(200).json({
    data: {
      status: "ok",
      service: "SELA API",
      timestamp: new Date().toISOString()
    }
  });
});