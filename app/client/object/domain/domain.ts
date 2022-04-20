import {Domain} from "../../../models/domain"
import transporter from "../../../utils/transporter"
import Messages from './messages'

export default {
    check: (name:String) => {return transporter.send(Messages.check(name))},
    info: (name:String) => {return transporter.send(Messages.info(name))},
    create: (domain:Domain) => {return transporter.send(Messages.create(domain))},
    renew: (domain: Domain,period:Number) => {return transporter.send(Messages.renew(domain,period))},
    update: (domain:Domain) => {return transporter.send(Messages.update(domain))},
}
