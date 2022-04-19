const Messages = require('./messages')
const transporter = require('../../../utils/transporter')

const Host = {
    check: (name) =>{return transporter.send(Messages.check(name))},
    info: (name) =>{return transporter.send(Messages.check(name))},
    update: (host) =>{return transporter.send(Messages.update(host))},
    create: (host) =>{return transporter.send(Messages.create(host))},
}

module.exports = Host