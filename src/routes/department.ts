import express from "express";

import DepartmentController from "../controllers/department";

const router = express.Router();

const departmentController = new DepartmentController();

router.post("/departments", departmentController.create);
router.put("/departments/:id", departmentController.update);
router.get("/departments", departmentController.getAll);
router.get("/departments/:id", departmentController.get);
router.delete("/departments/:id", departmentController.delete);

export default router;
