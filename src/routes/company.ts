import Express from "express";

import CompanyController from "../controllers/company";

const router = Express.Router();
const companyController = new CompanyController();

router.post("/company", companyController.create);
router.put("/company/:id", companyController.update);
router.get("/company", companyController.getAll);
router.get("/company/:id", companyController.get);
router.delete("/company/:id", companyController.delete);

export default router;
