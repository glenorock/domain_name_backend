const express = require("express")
const config = require('config')
const session = require("express-session")

const session_conf = require("./middleware/session_middleware")
const check = require('./app/validator/checkDomain')

const app = express()

app.use(session(session_conf.getConfig()))

const requestTime = function (req:any, res:any, next:any) {
    req.requestTime = Date.now()
    next()
}


app.use(requestTime)


app.get('/', (req:any, res:any) => {
let responseText = 'Hello World!<br>'
responseText += '<small>Requested at: ${req.requestTime}</small>'
check.checkProhibited("test")
res.send(responseText)
})

app.listen(config.get("server.port"))