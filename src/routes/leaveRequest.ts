import express from "express";

import LeaveRequestController from "../controllers/leaveRequest";

const router = express.Router();
const leaveRequestController = new LeaveRequestController();

router.post("/leaveRequest", leaveRequestController.create);
router.put("/leaveRequest/:id", leaveRequestController.update);
router.get("/leaveRequest", leaveRequestController.getAll);
router.get("/leaveRequest/:id", leaveRequestController.get);
router.delete("/leaveRequest/:id", leaveRequestController.delete);

export default router;
