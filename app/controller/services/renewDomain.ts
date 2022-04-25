import eppSession from '../../client/session/session'
import eppDomain from '../../client/object/domain/domain'

import { Domain } from '../../models/domain'

const renew = (domain: Domain, period: number) => {
    return new Promise((resolve, reject) => {
        eppSession.hello().then(() => {
            eppSession.login().then(() => {
                eppSession.hello().then(() =>{

                }).then(() =>{
                    eppDomain.renew(domain,period).then((res) =>{
                        resolve(res)
                    }).catch(err =>{
                        reject(err)
                    })
                }).catch(err =>{
                    reject(err)
                })
            }).catch(err => {
                reject(err)
            })
        }).catch(err => {
            reject(err)
        })
    })
}

export default {renew}