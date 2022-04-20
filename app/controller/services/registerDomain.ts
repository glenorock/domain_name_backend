const mailer = require('../../mail/mailer')
const payer = require('../../payment/payer')
const eppSession = require('../../client/session/session')
const eppContact = require("../../client/object/contact/contact")
const eppHost = require('../../client/object/host/host')
const eppDomain = require('../../client/object/domain/domain')
import { Domain } from "../../models/domain"

const register = (data:Domain,number:string) => {
    return new Promise((resolve, reject) => {
        payer.pay(number).then(() => {
            
        }).catch((err:any) => {
            reject(err)
        })
    })
}

module.exports = {
    register
}