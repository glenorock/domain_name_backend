import  mailer from '../../mail/mailer'
import payer from '../../payment/payer'
import eppSession from '../../client/session/session'
import eppContact  from "../../client/object/contact/contact"

import eppHost from '../../client/object/host/host'
import  eppDomain from '../../client/object/domain/domain'
import { Domain } from "../../models/domain"

const register = (data:Domain,number:string) => {
    return new Promise((resolve, reject) => {
        payer.pay(number,7000).then(() => {
            
        }).catch((err:any) => {
            reject(err)
        })
    })
}

export default {
    register
}