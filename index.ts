import express from "express"
import config from 'config'


const app = express()

app.use(express.json())


app.get('/', (req:any, res:any) => {
let responseText = `Hello World!<br>`
responseText += `<small>Requested at: ${req.requestTime}</small>`
res.send(responseText)
})


app.listen(config.get("server.port"))