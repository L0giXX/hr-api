import express from "express";

import SalaryController from "../controllers/salary";

const router = express.Router();
const salaryController = new SalaryController();

router.post("/salary", salaryController.create);
router.put("/salary/:id", salaryController.update);
router.get("/salary", salaryController.getAll);
router.get("/salary/:id", salaryController.get);
router.delete("/salary/:id", salaryController.delete);

export default router;
