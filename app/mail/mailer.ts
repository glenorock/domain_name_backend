const Genrator = require('./generator')
const mailTransporter = require('./transporter')
import { Event } from "./event"

const sendMail = (_event:Event, _receiver:String) => {
    let generator = Genrator[_event]
    let subject = generator.message
    let message = generator.parse()
    let receiver = _receiver
    return mailTransporter.send(subject, message, receiver)
}

module.exports = {sendMail}