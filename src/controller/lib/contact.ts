import {Socket, Request} from "../../client";
import { Contact } from "../../models";

export function checkById(id:string){
    return new Promise((resolve,reject) =>{
        let client = Socket.getInstance()
        client.send(Request.Contact.checkById(id)).then((res) =>{
            resolve(res)
        }).catch((err) =>{
            reject(err)
        })
    })
}

export function checkByEmail(email:string){
    return new Promise((resolve,reject) =>{
        let client = Socket.getInstance()
        client.send(Request.Contact.checkByEmail(email)).then((res) =>{
            resolve(res)
        }).catch((err) =>{
            reject(err)
        })
    })
}

export function getInfoByEmail(email:string){
    return new Promise((resolve,reject) =>{
        let client = Socket.getInstance()
        client.send(Request.Contact.getInfoByEmail(email)).then((res) =>{
            resolve(res)
        }).catch((err) =>{
            reject(err)
        })
    })
}

export function getInfoById(id:string){
    return new Promise((resolve,reject) =>{
        let client = Socket.getInstance()
        client.send(Request.Contact.getInfoById(id)).then((res) =>{
            resolve(res)
        }).catch((err) =>{
            reject(err)
        })
    })
}

export function register(contact:Contact){
    return new Promise((resolve,reject) =>{
        let client = Socket.getInstance()
        client.send(Request.Contact.create(contact)).then((res) =>{
            resolve(res)
        }).catch((err) =>{
            reject(err)
        })
    })
}

export function update(contact:Contact){
    return new Promise((resolve,reject) =>{
        let client = Socket.getInstance()
        client.send(Request.Contact.update(contact)).then((res) =>{
            resolve(res)
        }).catch((err) =>{
            reject(err)
        })
    })
}

export function getDomains(id:string){
    return new Promise((resolve,reject) =>{
        let client = Socket.getInstance()
        client.send(Request.Contact.getDomains(id)).then((res) =>{
            resolve(res)
        }).catch((err) =>{
            reject(err)
        })
    })
}