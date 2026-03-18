import { Request, Response } from "express";
import { createUser } from "../db/queries/user.js";

export const syncUser = async (req: Request, res: Response) => {
  try {
    // Note: ensure req.user is asserted or checked, since optional in express.d.ts
    if (!req.user) return res.status(401).json({ error: "No user found" });
    
    const { sub: id, email, name } = req.user;

    await createUser({
      id,
      email: email || null,
      name: name || null,
    });

    res.json({ success: true });
  } catch (error) {
    console.error("[syncUser error]", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};