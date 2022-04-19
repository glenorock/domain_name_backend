const mailer = require('../../mail/mailer')
const payer = require('../../payment/payer')
const eppSession = require('../../client/session/session')
const eppContact = require("../../client/object/contact/contact")
const eppHost = require('../../client/object/host/host')
const eppDomain = require('../../client/object/domain/domain')

const createContactIfNotExists = (contact) => {
    return new Promise((resolve, reject) => {
        eppContact.checkByEmail(contact.email).then((res) => {
            if (res.exists) {
                eppContact.create(contact).then((res) => {
                    mailer.sendMail("create:contact", contact.emaiil)
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
            } else {
                resolve(res)
            }
        }).catch((res) => {
            reject(res)
        })
    })
}

const createContacts = (contacts) => {
    let data = Array(contacts)
    let promisses = []
    data.forEach((contact) => {
        promisses.push(createContactIfNotExists(contact))
    })
    return Promise.all(promisses)
}

module.exports = {createContacts}