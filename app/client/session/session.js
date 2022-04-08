const Messages = require('./messages')
const transporter = require('../utils/transporter')
const Session = {
    login: async () => {
        await transporter.send(Messages.loginMessage())
    },
    logout: async () => {
        await transporter.send(Messages.logoutMessage())
    },
    hello: async () => {
        await transporter.send(Messages.helloMessage())
    }
}

module.exports = Session