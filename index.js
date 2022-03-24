const express = require("express")
const config = require('config')
const session = require("express-session")

const session_conf = require("./middleware/session_middleware")

const app = express()

app.use(session(session_conf.getConfig()))

const requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
}


app.use(requestTime)


app.get('/', (req, res) => {
let responseText = 'Hello World!<br>'
responseText += `<small>Requested at: ${req.requestTime}</small>`
res.send(responseText)
})

app.listen(config.get("server.port"))