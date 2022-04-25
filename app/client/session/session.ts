import * as Messages from './messages'
import * as  transporter from "../../utils/transporter"

let login =  () => {
    return transporter.send(Messages.login())
}

let logout = () => {
    return transporter.send(Messages.logout())
}

let hello =  () => {
    return transporter.send(Messages.hello())
}
export {
    login,
    logout,
    hello
}

