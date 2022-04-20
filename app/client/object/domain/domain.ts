import {Domain} from "../../../models/domain"

const transporter = require('../../../utils/transporter')
const Messages = require('./messages')


const domain = {
    check: (name:String) => {return transporter.send(Messages.check(name))},
    info: (name:String) => {return transporter.send(Messages.info(name))},
    create: (domain:Domain) => {return transporter.send(Messages.create(domain))},
    renew: (domain: Domain,period:Number) => {return transporter.send(Messages.renew(domain,period))},
    update: (domain:Domain) => {return transporter.send(Messages.update(domain))},
}

module.exports = domain