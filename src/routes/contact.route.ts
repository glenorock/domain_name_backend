import { Router } from "express";
import * as ContactController from '../controller/contact.controller';

const router = Router()

router.get("/",ContactController.getAllContacts);
router.get("/:id",ContactController.getContact);
router.post("/",ContactController.createContact);
router.post("/bulk",ContactController.bulkCreateContacts);
router.put("/:id",ContactController.updateContact);

export default router;