import {Domain, DomainPeriodUnits} from "../../../models/domain"
import * as transporter from "../../../utils/transporter"
import * as  Messages from './messages'

let check = (names:String[]) => {return transporter.send(Messages.check(names))}
let info = (names:String[]) => {return transporter.send(Messages.info(names))}
let create = (domain:Domain) => {return transporter.send(Messages.create(domain))}
let renew =  (domain: Domain,period:{unit:DomainPeriodUnits,value:number}) => {return transporter.send(Messages.renew(domain,period))}
let update = (domain:Domain) => {return transporter.send(Messages.update(domain))}


export {
    check,
    info,
    create,
    renew,
    update
}
