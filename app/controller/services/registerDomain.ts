import  * as mailer from '../../mail'
import * as payer from '../../payment/payer'
import * as eppSession from '../../client/lib/Request/lib/session/session'
import * as eppContact  from "../../client/lib/Request/lib/object/contact/contact"

import * as eppHost from '../../client/lib/Request/lib/object/host/host'
import  * as eppDomain from '../../client/lib/Request/lib/object/domain/domain'
import { Domain } from "../../models/index"
import * as Utils from '../../utils/index'

const register = (data:Domain,payerNumber:string) => {
    return new Promise((resolve, reject) => {
        payer.pay(payerNumber,7000).then(() => {
            resolve("paid")
        }).catch((err:any) => {
            reject(err)
        })
    })
}

export {
    register
}