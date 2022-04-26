import * as eppSession from '../../client/session/session'
import * as eppHost from '../../client/object/host/host'
import { Host } from "../../models/index"
import * as Utils from '../../utils/index'

const registerOne = (host:Host) => {
    return new Promise((resolve, reject) => {
        eppSession.hello().then(() => {
            eppSession.login().then(() => {
                eppHost.create(host).then((res:any) => {
                    resolve(res)
                }).catch((err: any) => {
                    reject(err)
                })
            }).catch((err: any) => {
                reject(err)
            }).finally(() => {
                eppSession.logout()
            })
        }).catch((err: any) => {
            reject(err)
        })
    })
}

const register = (hosts:Host[]) => {
    return new Promise((resolve, reject) => {
        let promises: Promise<any>[] = []
        hosts.forEach((host) => {
            promises.push(registerOne(host))
        })
        Promise.all(promises).then((res:any) => {
            resolve(res)
        }).catch((err:any) => {
            reject(err)
        })
    })
}

export {
    register
}