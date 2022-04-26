import  * as mailer from '../../mail/mailer'
import * as payer from '../../payment/payer'
import * as eppSession from '../../client/session/session'
import * as eppContact  from "../../client/object/contact/contact"

import * as eppHost from '../../client/object/host/host'
import  * as eppDomain from '../../client/object/domain/domain'
import { Domain } from "../../models/domain"
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