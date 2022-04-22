import express from "express"
import api from './app'
import config from 'config'
import * as session from 'express-session'


const app = express()


const requestTime = function (req:express.Request, res:express.Response, next:any) {
    req.body.requestTime = Date.now()
    next()
}


app.use(requestTime)


app.get('/', (req:any, res:any) => {
let responseText = `Hello World!<br>`
responseText += `<small>Requested at: ${req.requestTime}</small>`
res.send(responseText)
})

app.post('\whois',api.whois)

app.listen(config.get("server.port"))