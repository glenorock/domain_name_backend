import { Event, EventTypes, Mail  } from "../../models/index"

export const generateMessage = (event:Event,receivers:string[]) =>{
    let mail:Mail = {
        subject:"",
        message: "",
        receivers:receivers
    }
    switch(event.type){
        case EventTypes.AccountCreation:
            break
        case EventTypes.DomainCreation:
            break
        default:
            break
    }
    return mail
}
