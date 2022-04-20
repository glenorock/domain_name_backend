const mailer = require('../../mail/mailer')
const eppSession = require('../../client/session/session')
const eppContact = require("../../client/object/contact/contact")
import { Contact } from "../../models/contact"
const createContactIfNotExists = (contact: Contact) => {
    return new Promise((resolve, reject) => {

        eppSession.hello().then(() => {
            console.log("Connected to epp server: ")
            eppSession.login().then(() => {
                eppContact.checkByEmail(contact.email).then((res: any) => {
                    if (res.exists) {
                        eppContact.create(contact).then((res: any) => {
                            eppSession.logout().then(() => {
                                mailer.sendMail("create:contact", contact.email)
                                resolve(res)
                            }).catch((err: any) => {
                                reject(err)
                            })
                        }).catch((err: any) => {
                            reject(err)
                        })
                    } else {
                        resolve(res)
                    }
                }).catch((err: any) => {
                    reject(err)
                })
            }).catch((err: any) => {
                reject(err)
            })
        }).catch((err: any) => {
            reject(err)
        })
    })
}

const createContacts = (contacts: Contact[]) => {
    return new Promise<any>((resolve, reject) => {
        let promisses: Promise<any>[] = []
        contacts.forEach((contact) => {
            promisses.push(createContactIfNotExists(contact))
        })
        Promise.all(promisses).then(
            (res) => {
                resolve(res)
            }).catch((err) => {
                reject(err)
            })
    })
}

module.exports = {
    createContacts
}