import express from "express";
import cors from "cors";
import helmet from "helmet";
import authRoutes from "./routes/auth.routes.js";
import { limiter } from "./middleware/rateLimit.middleware";
const app = express();
app.use(limiter);
app.use(helmet());
app.use(cors({ 
  origin: "http://localhost:3000",
  credentials: true 
}));
app.use(express.json());

app.use("/auth", authRoutes);

export default app;