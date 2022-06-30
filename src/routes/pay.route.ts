import { Express, Router } from "express";
import * as CampayController from '../controller/campay.controller';
const router = Router();

router.post('/pay', async function(req:any, res:any) {
    const results = await CampayController.pay(req.body)
    res.send(results)
});

export default router;