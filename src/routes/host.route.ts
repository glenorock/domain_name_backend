import { Router } from "express";
import * as HostController from "../controller/host.controller";

const router = Router()

router.get("/",HostController.getAllHosts);
router.get("/:id",HostController.getHost);
router.post("/",HostController.createHost);
router.put("/:id",HostController.updateHost);

export default router;