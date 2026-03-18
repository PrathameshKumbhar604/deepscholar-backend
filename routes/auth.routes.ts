import express from "express";
import { syncUser } from "../controllers/auth.controller";
import { requireAuth } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/sync", requireAuth, syncUser);

export default router;