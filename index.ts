import express from "express"
import config from 'config'
import PayMentRouter from './src/routes/pay.route';
import EppRouter from './src/routes/epp.route';
import cors from 'cors';
const app = express()

app.use(express.json())
app.use(cors())
app.get('/', (req:any, res:any) => {
let responseText = `Hello World!<br>`
responseText += `<small>Requested at: ${req.requestTime}</small>`
res.send(responseText)
})
app.use('/',PayMentRouter)
app.use('/', EppRouter)

app.listen(config.get("server.port"))