import express from "express";
import { createRole, getRoles } from "../controllers/role";

const router = express.Router();

router.post("/role", createRole);
router.get("/role", getRoles);

export default router;
