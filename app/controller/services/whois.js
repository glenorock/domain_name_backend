const eppSession = require('../../client/session/session')
const eppDomain = require('../../client/object/domain/domain')

const whois = (name) => {
    return new Promise((resolve, reject) => {
        eppSession.hello().then(() => {
            console.log("Connected to epp server: ")
            eppSession.login().then(() => {
                eppDomain.check(name).then((res) => {
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

module.exports = {whois}