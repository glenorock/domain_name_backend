const mailer = require('../../mail/mailer')
const payer = require('../../payment/payer')
const eppSession = require('../../client/session/session')
const eppContact = require("../../client/object/contact/contact")
const eppHost = require('../../client/object/host/host')
const eppDomain = require('../../client/object/domain/domain')

const register = (data) => {
    let contacts = Array(data.contactEmails)
    let hosts = Array(data.hosts)
    let number = String(data.number)
    return new Promise((resolve, reject) => {
        payer.pay(number).then(() => {
            createContacts(contacts).then(() => {
                getContacts().then((res) => {
                    data.domain.contacts = res

                }).catch((err) => {
                    reject(err)
                })
            }).catch((err) => {
                reject(err)
            })
        }).catch((err) => {
            reject(err)
        })
    })
}

module.exports = {
    register
}