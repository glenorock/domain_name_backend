import { Router } from "express";
import * as DomainController from "../controller/domain.controller";

const router = Router()

router.get("/",DomainController.getAllDomains);
router.get("/:id",DomainController.getDomain);
router.post("/",DomainController.createDomain);
router.put("/:id",DomainController.updateDomain);

export default router;