const eppSession = require('../../client/session/session')
const eppDomain = require('../../client/object/domain/domain')

const whois = (name:string) => {
    return new Promise((resolve, reject) => {
        eppSession.hello().then(() => {
            console.log("Connected to epp server: ")
            eppSession.login().then(() => {
                eppDomain.check(name).then((res:any) => {
                    eppSession.logout().then(() => {
                        resolve(res)
                    }).catch((err: any) => {
                        reject(err)
                    })
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

module.exports = {whois}