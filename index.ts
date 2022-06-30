import express from "express"
import config from 'config'
import PayMentRouter from './src/routes/pay.route';

const app = express()

app.use(express.json())

app.get('/', (req:any, res:any) => {
let responseText = `Hello World!<br>`
responseText += `<small>Requested at: ${req.requestTime}</small>`
res.send(responseText)
})
app.use('/',PayMentRouter)

app.listen(config.get("server.port"))