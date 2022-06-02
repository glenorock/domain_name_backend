import config from 'config'
import * as nodemailer from 'nodemailer'
import { Mail } from '../../models/index';
var mailTransporter = nodemailer.createTransport(config.get("email"));

export const sendMail = (mail:Mail) => {
    return new Promise((resolve, reject) => {
      var mailOptions:any = {
        from: config.get("email.auth.user"),
        to: mail.receivers.join(","),
        subject: mail.subject,
        html: mail.message
      }
      mailTransporter.sendMail(mailOptions, function (error, info) {
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
