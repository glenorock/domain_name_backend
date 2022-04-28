import * as Messages from './messages'
import { Contact } from "../../../../../../models/index"
import * as Utils from '../../../../../../utils/index'
const transporter = Utils.Transporter

let checkById = (id:string) => {
    return transporter.send(Messages.checkById(id))
}

let checkByEmail =  (email:string) => {
    return transporter.send(Messages.checkByEmail(email))
}

let getInfoByEmail = (email:string) => {
    return transporter.send(Messages.getInfoByEmail(email))
}

let getInfoById = (id:string) => {
    return transporter.send(Messages.getInfoById(id))
}

let create = (contact:Contact) => {
    return transporter.send(Messages.create(contact))
}

let update =  (contact:Contact) => {
    return transporter.send(Messages.update(contact))
}

let getDomains = (contactId:string) =>{
    return transporter.send(Messages.getDomains(contactId))
}

export {
    checkById,
    checkByEmail,
    getInfoByEmail,
    getInfoById,
    create,
    update,
    getDomains,
}
