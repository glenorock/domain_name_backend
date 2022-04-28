import {Domain, DomainPeriodUnits} from "../../../../../models/index"
import * as  Messages from './messages'
import * as Utils from '../../../../../utils/index'
const transporter = Utils.Transporter

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
