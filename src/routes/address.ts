import express from "express";

import AttendanceController from "../controllers/attendance";

const router = express.Router();
const attendanceController = new AttendanceController();

router.post("/attendance", attendanceController.create);
router.put("/attendance/:id", attendanceController.update);
router.get("/attendance", attendanceController.getAll);
router.get("/attendance/:id", attendanceController.get);
router.delete("/attendance/:id", attendanceController.delete);

export default router;
