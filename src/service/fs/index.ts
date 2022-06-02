import { Mail } from "../../types/mail.type";
import config from 'config';
import * as nodemailer from 'nodemailer'

export const sendMail = (mail:Mail) => {
    var mailTransporter = nodemailer.createTransport(config.get("email"));
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
