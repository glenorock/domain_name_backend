import { Host, IpAddresse, } from "../../../models/hosts"
import * as Messages from './messages'
import * as transporter from "../../../utils/transporter"

let check = (names:String[]) =>{return transporter.send(Messages.check(names))}
let info = (names:String[]) =>{return transporter.send(Messages.check(names))}
let create = (host:Host) =>{return transporter.send(Messages.create(host))}
let addAddr = (host:Host,addrs:IpAddresse[]) =>{return transporter.send(Messages.addAddr(host,addrs))}
let remAddr = (host:Host,addrs:IpAddresse[]) => {return transporter.send(Messages.remAddr(host,addrs))}

export {
    check,
    info,
    create,
    addAddr,
    remAddr
}
