import * as nodemailer from 'nodemailer'
import config from 'config' 
import { Mail } from '../models/index';

var transporter = nodemailer.createTransport(config.get("email"));


const send = (mail:Mail) => {
  return new Promise((resolve, reject) => {
    var mailOptions:any = {
      from: config.get("email.auth.user"),
      to: mail.receivers.join(","),
      subject: mail.subject,
      html: mail.message
    }
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        resolve(undefined)
      } else {
        console.log('Email sent: ' + info.response);
        reject(info.response)
      }
    });
  })
}

export { send}