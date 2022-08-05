import express from "express"
import config from 'config'
import cookieParser from 'cookie-parser'
import cors from 'cors';

import PayMentRouter from './src/routes/pay.route';
import EppRouter from './src/routes/epp.route';
import db from './src/config/db.config';

const app = express()
db.sequelize.sync()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.text());
app.use(cookieParser());

app.use(cors())
app.get('/', (req:any, res:any) => {
let responseText = `Hello World!<br>`
responseText += `<small>Requested at: ${req.requestTime}</small>`
res.send(responseText)
})
app.use('/',PayMentRouter)
app.use('/', EppRouter)

app.listen(config.get("server.port"))