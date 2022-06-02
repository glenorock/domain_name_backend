import express from "express"
import  * as api from './src/index'
import config from 'config'


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