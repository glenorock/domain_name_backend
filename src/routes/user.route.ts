import { Router } from "express";
import * as UserController from "../controller/user.controller";

const router = Router()

router.get("/users",UserController.getAll);
router.post("/login",UserController.login);
router.post("/logout",UserController.logout);
router.put("/activate/:id",UserController.activate);
router.put("/deactivate/:id",UserController.deactivate);

export default router;
