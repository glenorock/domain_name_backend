const eppSession = require('../../client/session/session')
const eppContact = require("../../client/object/contact/contact")

const getContacts = (contacts) => {
    return new Promise((resolve, reject) => {
        let data = Array(contacts)
        let promisses = []
        eppSession.hello().then(() => {
            console.log("Connected to epp server: ")
            eppSession.login().then(() => {
                data.forEach((contact) => {
                    promisses.push(eppContact.getInfoByEmail(contact.email))
                })
                Promise.all(promisses).then((res) => {
                    eppSession.logout().then(() => {
                        resolve(res)
                    }).catch((err) => {
                        reject(err)
                    })
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
    getContacts
}