const Messages = require('./messages')
const transporter = require('../utils/transporter')

const Session = {
    checkContactById: (id) => {
        return transporter.send(Messages.checkContactById(id))
    },
    checkContactByEmail: (email) => {
        return transporter.send(Messages.checkContactByEmail(email))
    },
    checkContactManyByEmail: (emails) => {
        return transporter.send(Messages.checkContactManyByEmail(emails))
    },
    checkContactManyById: (ids) => {
        return transporter.send(Messages.checkContactManyById(ids))
    },
    getContactInfoByEmail: (email) => {
        return transporter.send(Messages.getContactInfoByEmail(email))
    },
    getContactInfoById: (id) => {
        return transporter.send(Messages.getContactInfoById(id))
    },
    createContact: (contact) => {
        return transporter.send(Messages.createContact(contact))
    },
    createManyContacts: (contacts) => {
        return transporter.send(Messages.createManyContacts(contacts))
    },
    updateContact: (contact) => {
        return transporter.send(Messages.updateContact(contact))
    }
}

module.exports = Session