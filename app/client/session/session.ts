const Messages = require('./messages')
const transporter = require('../../utils/transporter')
import { Logger } from "../../utils/logger"

const Session = {
    login: () => {
        return transporter.send(Messages.login())
    },
    logout: () => {
        return transporter.send(Messages.logout())
    },
    hello: () => {
        return transporter.send(Messages.hello())
    }
}

module.exports = Session