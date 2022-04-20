import { Host, IpAddresse } from "../../../models/models"
import Messages from './messages'
import transporter from "../../../utils/transporter"

const host = {
    check: (names:String[]) =>{return transporter.send(Messages.check(names))},
    info: (names:String[]) =>{return transporter.send(Messages.check(names))},
    create: (host:Host) =>{return transporter.send(Messages.create(host))},
    addAddr:(host:Host,addrs:IpAddresse[]) =>{return transporter.send(Messages.addAddr(host,addrs))},
    remAddr:(host:Host,addrs:IpAddresse[]) => {return transporter.send(Messages.remAddr(host,addrs))}
}

module.exports = host