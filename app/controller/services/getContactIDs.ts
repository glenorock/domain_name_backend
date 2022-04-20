const eppSession = require('../../client/session/session')
const eppContact = require("../../client/object/contact/contact")
import { Contact } from "../../models/models"

const getContacts = (contacts:Contact[]) => {
    return new Promise((resolve, reject) => {
        
        let promisses:Promise<any>[] = []
        eppSession.hello().then(() => {
            console.log("Connected to epp server: ")
            eppSession.login().then(() => {
                contacts.forEach((contact) => {
                    promisses.push(eppContact.getInfoByEmail(contact))
                })
                Promise.all(promisses).then((res) => {
                    eppSession.logout().then(() => {
                        resolve(res)
                    }).catch((err:any) => {
                        reject(err)
                    })
                }).catch((err) => {
                    reject(err)
                })
            }).catch((err:any) => {
                reject(err)
            })
        }).catch((err:any) => {
            reject(err)
        })
    })
}

module.exports = {
    getContacts
}