import {Socket, Request} from "../../client";
import { Domain, DomainPeriodUnits } from "../../models";

export function check(names:string[]){
    return new Promise((resolve,reject) =>{
        const client = Socket.getInstance()
        client.send(Request.Domain.check(names)).then((res) => {
            resolve(res)
        }).catch((err) =>{
            reject(err)
        })
    })
}

export function info(names:string[]){
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
    return new Promise((resolve,reject) =>{
        const client = Socket.getInstance()
        client.send(Request.Domain.create(domain)).then((res) =>{
            resolve(res)
        }).catch((err) =>{
            reject(err)
        })
    })
}

export function renew(domain:Domain,period:{unit:DomainPeriodUnits,value:number}){
    return new Promise((resolve,reject) =>{
        const client = Socket.getInstance()
        client.send(Request.Domain.renew(domain,period)).then((res) =>{
            resolve(res)
        }).catch((err) =>{
            reject(err)
        })
    })
}