import Generator from './generator'
import * as mailTransporter from './transporter'
import { Event } from '../models/event'

const sendMail = (_event:Event, _receivers:string[]) => {
    return mailTransporter.send(Generator.generator(_event,_receivers))
}

export  {sendMail}