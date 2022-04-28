import { rejects } from 'assert'
import config from 'config'
import * as Net from 'net'
import { resolve } from 'path'
import * as nodemailer from 'nodemailer'
import { Mail } from '../../models/index';
var mailTransporter = nodemailer.createTransport(config.get("email"));

const host = String(config.get("cocca.host"))
const port = Number(config.get("cocca.port"))

// const send = (message: string) => {
//     const client = new Net.Socket()
//     return new Promise((resolve) => {
//         client.connect(port, host, () => {
//             console.log('TCP connection established with the server.');
//             client.write(message)
//             client.on('data', function (chunk: any) {
//                 let result = chunk.toString()
//                 client.end()
//                 resolve(result)
//             });
//         })
//     })
// }

const client = new Net.Socket()
    
const connect = () => {
    return new Promise((resolve)  =>{
        client.connect(port, host, () => {
            console.log('TCP connection established with the server.');
            resolve('TCP connection established with the server.');
            client.on('close',(data) =>{
                console.log(data)
            })
        })
    })
}

const close = () => {
    return new Promise((resolve) =>{
        client.end()
        console.log("connection ended")
        resolve("connection ended")
    })
}

const send = (message: string) => {
    return new Promise((resolve) => {
        client.write(message)
        client.on('data', function (chunk: any) {
            let result = chunk.toString()
            resolve(result)
        });
    })
}

const sendMail = (mail:Mail) => {
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
  
export {
    send,
    connect,
    close,
    sendMail
}