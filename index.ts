import express from "express"
import config from 'config'
import * as session from 'express-session'


const app = express()


const requestTime = function (req:any, res:any, next:any) {
    req.requestTime = Date.now()
    next()
}


app.use(requestTime)


app.get('/', (req:any, res:any) => {
let responseText = 'Hello World!<br>'
responseText += '<small>Requested at: ${req.requestTime}</small>'
res.send(responseText)
})

app.listen(config.get("server.port"))