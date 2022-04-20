import { Event, EventTypes } from "../models/event"
import { Mail } from "../models/mail"

const generator = (_event:Event,_receivers:string[]) =>{
    let mail:Mail = {
        subject:"",
        message: "",
        receivers:_receivers
    }
    switch(_event.type){
        case EventTypes.AccountCreation:
            break
        case EventTypes.DomainCreation:
            break
        default:
            break
    }
    return mail
}
export default {generator}
