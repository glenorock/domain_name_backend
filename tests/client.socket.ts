import { EppSocket } from "../app/client/lib/connection/socket";

const client = EppSocket.getInstance()

let out:any[] = []
client.send("test1").then((res) => {
    out.push(res)
}).then(() =>{
    client.send("test2").then((res) => {
        out.push(res)
    }).then(() =>{
        client.send("test3").then((res) => {
            out.push(res)
        }).then(() =>{
            client.send("test4").then((res) => {
                out.push(res)
            }).then(() =>{
                client.send("test5").then((res) => {
                    out.push(res)
                    console.log(out)
                    console.log(client)
                })
            })
        })
    })
})