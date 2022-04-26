import * as eppSession from '../../client/session/session'
import * as eppDomain from '../../client/object/domain/domain'
import * as Utils from '../../utils/index'

import { Domain, DomainPeriodUnits } from '../../models/index'

const renew = (domain: Domain, period:{unit:DomainPeriodUnits,value:number}) => {
    return new Promise((resolve, reject) => {
        eppSession.hello().then(() => {
            eppSession.login().then(() => {
                eppSession.hello().then(() =>{

                }).then(() =>{
                    eppDomain.renew(domain,period).then((res) =>{
                        eppSession.logout().then(() =>{
                            resolve(res)
                        }).catch(err =>{
                            reject(err)
                        })
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

export {renew}