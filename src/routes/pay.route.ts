import { Express, Router } from "express";
const router = Router();
import * as PaymentController from '../controller/payment.controller';

router.post('/pay', async function(req:any, res:any) {
    const results = await PaymentController.pay(req.body)
    res.send(results)
});

export default router;