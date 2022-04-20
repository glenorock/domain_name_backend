import { Host } from "../../../Models/models"

const Messages = require('./messages')
const transporter = require('../../../utils/transporter')

const host = {
    check: (name:String) =>{return transporter.send(Messages.check(name))},
    info: (name:String) =>{return transporter.send(Messages.check(name))},
    update: (host:String) =>{return transporter.send(Messages.update(host))},
    create: (host:String) =>{return transporter.send(Messages.create(host))},
}

module.exports = host