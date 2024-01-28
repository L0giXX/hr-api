import express from "express";

import BenefitController from "../controllers/benefit";

const router = express.Router();
const benefitController = new BenefitController();

router.post("/benefit", benefitController.create);
router.put("/benefit/:id", benefitController.update);
router.get("/benefit", benefitController.getAll);
router.get("/benefit/:id", benefitController.get);
router.delete("/benefit/:id", benefitController.delete);

export default router;
