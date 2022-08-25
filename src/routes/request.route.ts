import { Router } from "express";
import * as RequestController from "../controller/requests.controller";

const router = Router()

router.get("/",RequestController.getAllRequest);
router.get("/:id",RequestController.getRequest);
router.put("/accept/:id",RequestController.acceptRequest);
router.put("/reject/:id",RequestController.rejectRequest);


export default router;
