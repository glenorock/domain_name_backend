const eppSession = require('../../client/session/session')
const eppHost = require('../../client/object/host/host')

const registerOne = (host) => {
    return new Promise((resolve, reject) => {
        eppSession.hello().then(() => {
            eppSession.login().then(() => {
                eppHost.create(host).then((res) => {
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
            }).catch((err) => {
                reject(err)
            }).finally(() => {
                eppSession.logout()
            })
        }).catch((err) => {
            reject(err)
        })
    })
}

const register = (hosts) => {
    return new Promise((resolve, reject) => {
        let data = Array(hosts)
        let promises = []
        data.forEach((host) => {
            promises.push(registerOne(host))
        })
        Promise.all(promises).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}

module.exports = {
    register
}