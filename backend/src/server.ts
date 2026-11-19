import app from "./app.js";
import { env } from "./config/env.js";

const server = app.listen(env.PORT, () => {
  console.info(`[SELA API] Running on http://localhost:${env.PORT}`);
});

const shutdown = (signal: NodeJS.Signals) => {
  console.info(`[SELA API] Received ${signal}. Shutting down...`);

  server.close((error) => {
    if (error) {
      console.error("[SELA API] Shutdown error:", error);
      process.exitCode = 1;
    }
  });
};

process.once("SIGINT", () => shutdown("SIGINT"));
process.once("SIGTERM", () => shutdown("SIGTERM"));