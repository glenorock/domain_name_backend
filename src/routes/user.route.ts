import { Router } from "express";
import * as UserController from "../controller/user.controller";

const router = Router()

router.get("/",UserController.getAllUsers);
router.get("/:id",UserController.getUser);
router.post("/",UserController.createUser);
router.put("/:id",UserController.updateUser);

export default router;