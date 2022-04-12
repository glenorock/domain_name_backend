const Messages = require('./messages')
const transporter = require('../../../utils/transporter')

const Host = {
    check: (name) =>{return transporter.send(Messages.check(name))},
    info: (name) =>{return transporter.send(Messages.check(name))},
    update: (domain) =>{return transporter.send(Messages.update(domain))},
    create: (domain) =>{return transporter.send(Messages.create(domain))},
}

module.exports = Host