import { Socket, Request } from '../../client'
import { Command } from './command'

export const exec = (command:Command) => {
    return new Promise((resolve, reject) => {
        const client = Socket.getInstance()
        client.send(Request.Session.hello()).then(() => {
            client.send(Request.Session.login()).then(() => {
                command.run()?.then((res) => {
                    client.send(Request.Session.logout()).then(() =>{
                        resolve(res)
                    }).catch((err) =>{
                        reject(err)
                    })
                }).catch((err) =>{
                    reject(err)
                })
            }).catch((err) => {
                reject(err)
            })
        }).catch((err) => {
            reject(err)
        })
    })
}
