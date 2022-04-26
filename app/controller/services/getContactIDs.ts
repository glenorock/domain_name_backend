import * as eppSession from '../../client/session/session'
import * as eppContact  from "../../client/object/contact/contact"
import * as Utils from '../../utils/index'

import { Contact } from "../../models/contact"

const getContacts = (contacts:Contact[]) => {
    return new Promise((resolve, reject) => {
        
        let promisses:Promise<any>[] = []
        eppSession.hello().then(() => {
            console.log("Connected to epp server: ")
            eppSession.login().then(() => {
                contacts.forEach((contact) => {
                    promisses.push(eppContact.getInfoByEmail(contact.email))
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

export {
    getContacts
}