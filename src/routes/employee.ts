import express from "express";

import EmployeeController from "../controllers/employee";

const router = express.Router();
const employeeController = new EmployeeController();

router.post("/employees", employeeController.create);
router.put("/employees/:id", employeeController.update);
router.get("/employees", employeeController.getAll);
router.get("/employees/:id", employeeController.get);
router.delete("/employees/:id", employeeController.delete);

export default router;
