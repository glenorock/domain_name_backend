import {Socket, Request} from "../../client";
import { Domain } from "../../models";

export function check(...names:string[]){
    return new Promise((resolve,reject) =>{
        const client = Socket.getInstance()
        client.send(Request.Domain.check(names)).then((res) => {
            resolve(res)
        }).catch((err) =>{
            reject(err)
        })
    })
}

export function info(...names:string[]){
    return new Promise((resolve,reject) =>{
        const client = Socket.getInstance()
        client.send(Request.Domain.info(names)).then((res) =>{
            resolve(res)
        }).catch((err) =>{
            reject(err)
        })
    })
}

export function register(domain:Domain){
    
}

export function renew(domain:Domain,period:number){

}