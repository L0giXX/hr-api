import express from "express";

import RoleController from "../controllers/role";

const router = express.Router();
const roleController = new RoleController();

router.post("/role", roleController.create);
router.put("/role/:id", roleController.update);
router.get("/role", roleController.getAll);
router.get("/role/:id", roleController.get);
router.delete("/role/:id", roleController.delete);

export default router;
