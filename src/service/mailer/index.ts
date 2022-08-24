import { Mail } from "../../types/mail.type";
import config from 'config';
import * as nodemailer from 'nodemailer'

export const sendMail = (mail:Mail) => {
    const mailTransporter = nodemailer.createTransport(config.get("email"));
    return new Promise((resolve, reject) => {
      const mailOptions:any = {
        from: config.get("email.auth.user"),
        to: mail.receivers.join(","),
        subject: mail.subject,
        html: mail.message
      }
      mailTransporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          resolve(undefined)
        } else {
          reject(info.response)
        }
      });
    })
  }
