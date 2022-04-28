import {Socket, Request} from "../../client";
import { Command } from "./command";

export const whois = (...names:string[]) =>{
    return new Promise((resolve,reject) =>{
        const client = Socket.getInstance()
        client.send(Request.Domain.check(names)).then((res) => {
            resolve(res)
        }).catch((err) =>{
            reject(err)
        })
    })
}