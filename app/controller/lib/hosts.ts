import { Socket, Request} from "../../client";
import { Host,IpAddresse } from "../../models";

export function check(names:string[]){
    return new Promise((resolve,reject) =>{
        let client = Socket.getInstance()
        client.send(Request.Host.check(names)).then((res) =>{
            resolve(res)
        }).catch((err) =>{
            reject(err)
        })
    })
}

export function info(names:string[]){
    return new Promise((resolve,reject) =>{
        let client = Socket.getInstance()
        client.send(Request.Host.info(names)).then((res) =>{
            resolve(res)
        }).catch((err) =>{
            reject(err)
        })
    })
}

export function register(host:Host){
    return new Promise((resolve,reject) =>{
        let client = Socket.getInstance()
        client.send(Request.Host.create(host)).then((res) =>{
            resolve(res)
        }).catch((err) =>{
            reject(err)
        })
    })
}

export function addAddress(host:Host,addr:IpAddresse[]){
    return new Promise((resolve,reject) =>{
        let client = Socket.getInstance()
        client.send(Request.Host.addAddr(host,addr)).then((res) =>{
            resolve(res)
        }).catch((err) =>{
            reject(err)
        })
    })
}

export function removeAddress(host:Host,addr:IpAddresse[]){
    return new Promise((resolve,reject) =>{
        let client = Socket.getInstance()
        client.send(Request.Host.remAddr(host,addr)).then((res) =>{
            resolve(res)
        }).catch((err) =>{
            reject(err)
        })
    })
}