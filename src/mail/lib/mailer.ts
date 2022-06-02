import { Event, Mail } from '../../models/index'
import * as Generator from './generator'
import * as Transporter from './transporter'


export class Mailer{
    /**
     * @description the mail to be sent
     */
    mail:Mail
    
    /**
     * 
     * @param event the event which triggered the mail
     * @param recievers the recievers of the mail
     */
    constructor(event:Event,recievers:string[]){
        this.mail = Generator.generateMessage(event,recievers)
    }
    
    /**
     * @description sends the mail
     */
    sendMail = () =>{
        Transporter.sendMail(this.mail)
    }

}