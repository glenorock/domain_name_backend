import express from "express"
import api from './app'
import config from 'config'
import * as session from 'express-session'


const app = express()

app.use(express.json())


app.get('/', (req:any, res:any) => {
let responseText = `Hello World!<br>`
responseText += `<small>Requested at: ${req.requestTime}</small>`
res.send(responseText)
})

app.post('/whois',api.whois)

app.post('/register',api.registerDomain)

app.post('/renew',api.renewDomain)

app.get('/domain/contact/:id',api.getContactDomains)

app.listen(config.get("server.port"))