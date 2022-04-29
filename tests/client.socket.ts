import { EppSocket } from "../app/client/lib/connection";
import config from 'config'


let host = String(config.get("cocca.host"))
let port = Number(config.get("cocca.port"))

const client = new EppSocket(host, port)

let out: any[] = []
client.send("test1").then((res) => {
    out.push(res)
}).then(() => {
    client.send("test2").then((res) => {
        out.push(res)
    }).then(() => {
        client.send("test3").then((res) => {
            out.push(res)
        }).then(() => {
            client.send("test4").then((res) => {
                out.push(res)
            }).then(() => {
                client.send("test5").then((res) => {
                    out.push(res)
                    console.log(out)
                    console.log(client)
                })
            })
        })
    })
})