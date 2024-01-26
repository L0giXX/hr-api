import express from "express";
import { createDepartment, getDepartments } from "../controllers/department";

const router = express.Router();

router.post("/department", createDepartment);
router.get("/department", getDepartments);

export default router;
