import * as Messages from './messages'
import transporter from "../../utils/transporter"

export default {
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

