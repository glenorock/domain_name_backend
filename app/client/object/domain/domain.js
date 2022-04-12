const transporter = require('../../../utils/transporter')
const Messages = require('./messages')

const Domain = {
    check: (name) => {return transporter.send(Messages.check(name))},
    info: (name) => {return transporter.send(Messages.info(name))},
    create: (domain) => {return transporter.send(Messages.create(domain))},
    renew: (domain,period) => {return transporter.send(Messages.renew(domain,period))},
    update: (domain) => {return transporter.send(Messages.update(domain))},
}

module.exports = Domain