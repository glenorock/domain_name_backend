import * as mailer from '../../mail/mailer'
import * as eppSession from '../../client/session/session'
import * as eppContact  from "../../client/object/contact/contact"
import { Contact } from "../../models/contact"
import { EventTypes, Event } from '../../models/event'

const createContactIfNotExists = (contact: Contact) => {
    return new Promise((resolve, reject) => {
        eppSession.hello().then(() => {
            console.log("Connected to epp server: ")
            eppSession.login().then(() => {
                eppContact.checkByEmail(contact.email).then((res: any) => {
                    if (res.exists) {
                        eppContact.create(contact).then((res: any) => {
                            eppSession.logout().then(() => {
                                mailer.sendMail({type:EventTypes.ContactCreation,data:""}, [contact.email])
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

export {
    createContacts
}