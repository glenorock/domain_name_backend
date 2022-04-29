/**
 * @module Mailer
 */
import { Event} from '../models/index'
import { Mailer } from './lib/mailer'

export const  getInstance = (event:Event,recievers:string[]):Mailer =>{
    return new Mailer(event,recievers)
}

export const sendMail = (event:Event,recievers:string[]) =>{
    (new Mailer(event,recievers)).sendMail()
}