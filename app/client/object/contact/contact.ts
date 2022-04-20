const Messages = require('./messages')
const transporter = require('../../../utils/transporter')
import { Contact } from "../../../models/models"

const contact = {
    checkById: (id:String) => {
        return transporter.send(Messages.checkById(id))
    },
    checkByEmail: (email:String) => {
        return transporter.send(Messages.checkByEmail(email))
    },
    getInfoByEmail: (email:String) => {
        return transporter.send(Messages.getInfoByEmail(email))
    },
    getInfoById: (id:String) => {
        return transporter.send(Messages.getInfoById(id))
    },
    create: (contact:Contact) => {
        return transporter.send(Messages.create(contact))
    },
    update: (contact:Contact) => {
        return transporter.send(Messages.update(contact))
    }
}

module.exports = contact