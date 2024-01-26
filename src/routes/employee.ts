import express from "express";
import { createEmployee, deleteEmployees, getEmployees } from "../controllers/employee";

const router = express.Router();

router.post("/employee", createEmployee);
router.get("/employee", getEmployees);
router.delete("/employee", deleteEmployees);

export default router;
