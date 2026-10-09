
import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();

// Add security-related HTTP headers.
app.use(helmet());

// Allow cross-origin requests during development.
app.use(cors());

// Parse incoming JSON request bodies.
app.use(express.json());

// Basic health-check endpoint.
app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    message: "IntellMeet backend is running",
  });
});

export default app;
