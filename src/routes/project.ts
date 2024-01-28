import express from "express";

import ProjectController from "../controllers/project";

const router = express.Router();
const projectController = new ProjectController();

router.post("/project", projectController.create);
router.put("/project/:id", projectController.update);
router.get("/project", projectController.getAll);
router.get("/project/:id", projectController.get);
router.delete("/project/:id", projectController.delete);

export default router;
