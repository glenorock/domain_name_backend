import { Router } from "express";
import * as TransactionController from "../controller/transaction.controller";

const router = Router()

router.get("/",TransactionController.getAllTransactions);
router.get("/:id",TransactionController.getTransaction);
router.post("/",TransactionController.createTransaction);
router.put("/:id",TransactionController.updateTransaction);

export default router;