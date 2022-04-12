const Messages = require('./messages')
const transporter = require('../../../utils/transporter')

const Contact = {
    checkById: (id) => {
        return transporter.send(Messages.checkById(id))
    },
    checkByEmail: (email) => {
        return transporter.send(Messages.checkByEmail(email))
    },
    getInfoByEmail: (email) => {
        return transporter.send(Messages.getInfoByEmail(email))
    },
    getInfoById: (id) => {
        return transporter.send(Messages.getInfoById(id))
    },
    create: (contact) => {
        return transporter.send(Messages.create(contact))
    },
    update: (contact) => {
        return transporter.send(Messages.update(contact))
    }
}

module.exports = Contact