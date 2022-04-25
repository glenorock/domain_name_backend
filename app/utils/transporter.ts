import { rejects } from 'assert'
import config from 'config'
import * as Net from 'net'
import { resolve } from 'path'

const host = String(config.get("cocca.host"))
const port = Number(config.get("cocca.port"))

// const send = (message: string) => {
//     const client = new Net.Socket()
//     return new Promise((resolve) => {
//         client.connect(port, host, () => {
//             console.log('TCP connection established with the server.');
//             client.write(message)
//             client.on('data', function (chunk: any) {
//                 let result = chunk.toString()
//                 client.end()
//                 resolve(result)
//             });
//         })
//     })
// }

const client = new Net.Socket()
    
const connect = () => {
    return new Promise((resolve,reject)  =>{
        client.connect(port, host, () => {
            console.log('TCP connection established with the server.');
            resolve('TCP connection established with the server.');
            client.on('close',(data) =>{
                console.log(data)
            })
        })
    })
}

const close = () => {
    return new Promise((resolve,reject) =>{
        client.end()
        console.log("connection ended")
        resolve("connection ended")
    })
}

const send = (message: string) => {
    return new Promise((resolve) => {
        client.write(message)
        client.on('data', function (chunk: any) {
            let result = chunk.toString()
            resolve(result)
        });
    })
}

export {
    send,
    connect,
    close
}